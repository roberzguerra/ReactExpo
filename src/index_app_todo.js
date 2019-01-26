import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Componentes criados no projeto.
import Todo from './components/Todo';

export default class App extends Component {

    state = {
        usuario: "Rober Guerra ",
        todos: [
            { id: 0, text: "Fazer café" },
            { id: 1, text: "Estudar o GoNative" },
        ],
    };

    addTodo = () => {
        this.setState({
            todos: [
                ...this.state.todos,
                { id: Math.random(), text: 'Novo todo' },
            ],
        });
    }

    render() {
        return (
            <View style = { styles.container } >
                <Text> {this.state.usuario} </Text>
                {
                    this.state.todos.map( todo => (
                        <Todo key={todo.id} title={todo.text}></Todo>
                    ))
                }
                <Button title="Adicionar todo" onPress={this.addTodo} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
