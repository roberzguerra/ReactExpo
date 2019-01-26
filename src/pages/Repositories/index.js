import React, { Component } from 'react';

import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import Header from '../../components/Header'

import api from '../../services/api';

import { connect } from 'react-redux';
import Welcome from '../Welcome';

class Repositories extends Component {

    state = {
        data: [],
        loading: true,
    };

    async componentDidMount() {
        //const username = await AsyncStorage.getItem('@Githuber:username');
        
        //const username = this.props.username;
        // OU desestruturando: 
        const { username } = this.props;
        const { data } = await api.get(`/users/${username}/repos`);

        this.setState({ data })
        this.setState({ loading: false });
    }

    renderList = () => {
        return (
            this.state.data.map(( repo, key ) => 
                (<Text key={repo.id}>{repo.name}</Text>)
            )

        );
    }

    render() {
        const { loading } = this.state;
        return (
            <View>
                <Header title="Repositórios" />
                
                { loading ? 
                    <ActivityIndicator size="small" color="#CCC" /> :
                    this.renderList()
                }
                {/* { this.state.data.map(( repo, key ) => 
                    (<Text key={repo.id}>{repo.name}</Text>)
                ) } */}
            </View>
        );
    }
}

const mapStateToProps = ({ github }) => ({
    username: github.username,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);