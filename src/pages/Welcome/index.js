import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, StatusBar, AsyncStorage, ActivityIndicator } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';
import  api from '../../services/api';

import { connect } from 'react-redux';
import { setUsername } from '../../store/ducks/github';

class Welcome extends Component {

    state = {
        username: '',
        loading: false,
        error: false,
    };

    checkUserExists = async (username) => {
        const user = await api.get(`/users/${username}`);
        return user;
    }

    saveUser = async (username) => {
       await AsyncStorage.setItem('@Githuber:username', username);
    }

    signIn = async () => {
        const { username, loading } = this.state;
        const { navigation } = this.props;

        if (loading) {
            return;
        }

        this.setState({ loading: true, error: false, });

        try {
            await this.checkUserExists(username);
            //await this.saveUser(username);
            
            this.props.setUsername(username);
            console.log(navigation);
            
            navigation.navigate('Repositories');

        } catch (err) {
            this.setState({ loading: false, error: true, });
        }
    };

    render() {
        const { username, loading, error } = this.state;
        
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
        
                <Text style={styles.title}>Bem-vindo { this.props.username } </Text>
                <Text style={styles.text}>
                    Para continuar precisamos que você informe seu usuário do github:
                </Text>
        
                {/* Realiza um ternario, se error == True, exibe o text */}
                { error && <Text style={styles.error}>Usuário inexistente.</Text> }

                <View style={styles.form}>
                    <TextInput 
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Digite seu usuário"
                        underlineColorAndroid="transparent"
                        value={username}

                        // Exemplos de uso iguais:
                        //onChangeText={text => this.setState({ username: text })}
                        onChangeText={username => this.setState({ username})}
                    />
                    
                    {/* Exemplo de comentario... */}

                    <TouchableOpacity style={styles.button} onPress={this.signIn}>
                        {/* <Text style={styles.buttonText}>Prosseguir</Text> */}
                        {loading ? (
                            <ActivityIndicator size="small" color="#FFF" />
                        ) : (
                            <Text style={styles.buttonText}>Prosseguir</Text>
                        )}
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={() => {}} style={styles.button}>
                        <Text>Mudar Nome</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ github }) => ({
    username: github.username,
});

const mapDispatchToProps = {
    setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
