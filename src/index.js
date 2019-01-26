import React, { Component } from 'react';

import createNavigator from './routes';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

export default class App extends Component {
    state = {
        userLogged: false,
    }

    hasRehydrated = () => {
        const state = store.getState();
        const { username } = state.github;
        this.setState({
            userLogged: username ? true : false
        });
    }

    
    render() {
        const { userLogged } = this.state;
        const Routes = createNavigator(userLogged);

        return (
            <Provider store={store}>
                <PersistGate
                    loading={null}
                    onBeforeLift={this.hasRehydrated}
                    persistor={persistor}
                >
                    <Routes />
                </PersistGate>
            </Provider>
        );
    }
}