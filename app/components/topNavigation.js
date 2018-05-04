import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';




export default class TopNavigation extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        switchValue: true,
        titleText: 'Movies',
    };
    _handleToggleSwitch = () => this.setState(state => ({
        switchValue: !state.switchValue,
        titleText: changeText(state.switchValue),
    }));





    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Switch
                    onValueChange={this._handleToggleSwitch}
                    value = {this.state.switchValue}
                />
                <Text style={styles.titleType}>
                    {this.state.titleText}
                </Text>
            </View>
        );
    }
}

function changeText(current){
    if(current){
        return "TV Shows"
    }else {
        return "Movies"
    }
}

const styles = StyleSheet.create({
    titleType: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 6,
    },
});