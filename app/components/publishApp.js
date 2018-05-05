import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
    Text,
    Image
} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import Home from './home';
import TopNavigation from './topNavigation';
import Movie from "./movie/movie";
import Favorites from "./favorites/favorites";

class PublishApp extends Component{

    //......................

    constructor(){
        super();
        this.state = { };
    }

    myCallback = (dataFromChild) => {
        console.log('My Call Back   =  ' + dataFromChild);
    };
    //.....................

    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle = "dark-content" hidden = {true}/>
                <View style={styles.topNav}>
                    <TopNavigation
                        callbackFromParent={this.myCallBack}
                    />
                </View>
                <ScrollView style={styles.movieHome}>
                    <Home />
                </ScrollView>

            </View>

        );
    }
}

export default TabNavigator({
    Home: { screen: PublishApp },
    Favorites: { screen: Favorites },
    Random: { screen: Movie },
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'Favorites') {
                    iconName = `ios-heart${focused ? '' : '-outline'}`;
                } else if (routeName === 'Random') {
                    iconName = `ios-help-circle${focused ? '' : '-outline'}`;
                }


                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={32} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: 'steelblue',
            },
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,

    }
);

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






