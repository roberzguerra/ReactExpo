import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Todo extends Component {

    static defaultProps = {
        title: "Fazer café padrão.",
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});