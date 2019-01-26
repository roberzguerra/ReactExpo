import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { setUsername } from '../../store/ducks/github';

import styles from './styles';
import { colors } from '../../styles'

class Header extends Component {

    signOut = async () => {
        const { navigation } = this.props;
        //await AsyncStorage.clear();
        this.props.setUsername(null);

        navigation.navigate('Welcome');
        
    };

    render() {

        const { title } = this.props;

        return (
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
                <View style={styles.left} />
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={this.signOut}>
                    <Icon name="exchange" size={16} style={styles.icon} />
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    setUsername,
};

//export default withNavigation(Header);
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Header));
