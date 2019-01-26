import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import github from './ducks/github';

export const reducer = combineReducers({
    github,
});

const persistConfig = {
    key: 'root',
    storage,
    timeout: null,
    whitelist: ['github']
};
const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = applyMiddleware(logger);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
