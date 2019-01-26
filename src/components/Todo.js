import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/*
const Todo = (props) => (
    <View>
        <Text>{props.title}</Text>
    </View>
);
*/

// Extrai do props (exemplo acima) o atributo title para ser usado diretamente.
const Todo = ({title}) => (
    <View>
        <Text>{title}</Text>
    </View>
);

Todo.defaultProps = {
    title: 'Todo padrão',
};

Todo.propTypes = {
    title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({

});

export default Todo;