import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
    Text,
    Image,
} from 'react-native';


import Home from './home';
import TopNavigation from './topNavigation';
import BottomNavigation from './bottomNavigation';





export default class PublishApp extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle = "dark-content" hidden = {true}/>
                <View style={styles.topNav}>
                    <TopNavigation />
                </View>
                <ScrollView style={styles.movieHome}>
                    <Home />
                </ScrollView>
                <View>
                    <BottomNavigation />
                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
    },
    topNav:{
        flex: 0,
        height:50,
    },
    movieHome:{
        flex:2,
        backgroundColor:'#f5f5f5',
    },
    bottomNav:{
        flex:0,
        height:50,

        marginBottom:0,
        backgroundColor: '#64b5f6',

    }


});





