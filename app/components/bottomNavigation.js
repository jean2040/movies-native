import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,

} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class BottomNavigation extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

            }}>

                <View style={{paddingLeft: 40}}>
                    <Ionicons name="md-home" size={32} color="white" />
                </View>

                <View>
                    <Ionicons name="md-heart" size={32} color="white" />
                </View>
                <View style={{paddingRight: 40}}>
                    <Ionicons name="md-help" size={32} color="white" />
                </View>

            </View>
        );
    }
}