'use strict';

import React ,{Component} from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

//........... Move this to APP.JS
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
//.... END .... Move this to APP.JS

import ItemDetails from './Itemdetails/itemDetails'


class Home extends Component{
    constructor(props){
        super(props);

        this.state = {};
        this.renderItem = this.renderItem.bind(this);
    }
    //This function is being called by the component to run the action. It sends the item to the action
    itemSelectedHandler = (item)=>{
        this.props.selectItem(item);
    };
    itemDeselectedHandler = ()=>{
        this.props.deselectItem();
    };

    componentDidMount(){
        this.props.getMovies(); //call the action
    }

    render(){
        if(this.props.loading){
            return(
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        }else{
            return(

                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                    <ItemDetails onModalClose = {this.itemDeselectedHandler}
                                 selectedItem = {this.props.selectedItem}
                    />
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        extraData={this.state}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}
                        />
                </View>
            );
        }
    }

    renderItem({item}){
        const image = 'https://image.tmdb.org/t/p/w154' + item.poster_path;
        return(
            <TouchableOpacity onPress={() => this.itemSelectedHandler(item)}>
                <View style={styles.row}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Image
                    style={styles.poster}
                    source={{uri: image }} />
                <Text style={styles.description}>
                    {item.overview}
                </Text>
            </View>
            </TouchableOpacity>
        )
    }

}

//........ Move this to APP.JS


// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state

function mapStateToProps(state, props){
    return{
        loading: state.dataReducer.loading,
        data: state.dataReducer.data,
        selectedItem: state.dataReducer.selectedItem
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);


//..... END  .. Move this to APP.JS

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 20,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    },
    poster:{
        width: 150,
        height: 250,
        alignItems: 'center'
    }
});


