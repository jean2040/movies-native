import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableHighlight

} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class BottomNavigation extends Component {
    onPress(){
        console.log('Pressed');
    }

    render() {
        return (
            <View style={styles.navBar}>
                <TouchableHighlight style={styles.button} onPress={this.onPress} >
                <View style={styles.iconButton}>
                    <Ionicons name="md-home" size={32} color="white" />
                </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.onPress}>
                    <View style={styles.iconButton}>
                    <Ionicons name="md-heart" size={32} color="white" />
                </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.onPress}>
                    <View style={styles.iconButton}>
                    <Ionicons name="md-help" size={32} color="white" />
                </View>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
   navBar:{
       flex: 1, flexDirection: 'row',alignItems: 'flex-end'
   },
   button:{
       flex:1,
       height:50,
       backgroundColor: 'steelblue'
   },
    iconButton:{
        flex:1,alignItems:'center',justifyContent:'center'
    }
});