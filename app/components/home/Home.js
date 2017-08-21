import React, {Component} from 'react';
import {AppRegistry, Text, View, Image} from 'react-native';

export default class Home extends Component {

    state = {
        message: `Click here.`
    }

    updateMessage = (textValue) => {
        message = " React";
        if (textValue) {
            message = textValue + " React";
        }
        this.setState({message: message});
    }

    render() {
        let picUrl = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <View style={[{padding: 40}]}>
                <Text
                    onPress={() => this.updateMessage("Hello")}>
                    {this.state.message}
                </Text>
                <Image source={picUrl}
                       style={{width: 193, height: 110}}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('Home', () => Home);
