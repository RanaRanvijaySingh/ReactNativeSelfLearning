import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Home from './app/components/home/Home'

export default class SelfLearning extends Component {

    render() {
        return (
            <View>
                <Home />
            </View>
        );
    }
}

AppRegistry.registerComponent('SelfLearning', () => SelfLearning);