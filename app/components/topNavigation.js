import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//................
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
//................


export default class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this._handleToggleSwitch = this._handleToggleSwitch.bind(this);

    }
    state = {
        switchValue: true,
        titleText: 'Movies'
    };




    _handleToggleSwitch = () => this.setState(state => ({
        switchValue: !state.switchValue,
        titleText: changeText(this.state.switchValue),
        sendIT: this.props.titleText
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