import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default class TopNavigation extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Switch onSyncPress={value => this.setState({value})}/>

            </View>
        );
    }
}