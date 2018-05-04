import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const itemDetails = (props) => {
    let modalContent = null;
    if(props.selectedItem){
        const image = 'https://image.tmdb.org/t/p/w154' + props.selectedItem.poster_path;
        modalContent = (
            <View>
                <Text style={styles.movieName}>{props.selectedItem.title}</Text>
                <Image
                    style={styles.poster}
                    source={{uri: image }} />
                <Text>Rating {props.selectedItem.vote_average}</Text>
                <Text>Release Date {props.selectedItem.release_date}</Text>
                <Text>{props.selectedItem.overview}</Text>
            </View>
        );
    }
    return(
        <Modal onRequestClose={props.onModalClose} visible={props.selectedItem != null} animationType={'slide'}>
            <View style={styles.modal}>
                {modalContent}
                <Button style={styles.buttons} title={"Add to My List"} color={'#33ADFF'} onPress={props.onItemSelected}/>
                <Button style={styles.buttons} title={"Close"} color={"red"} onPress={props.onModalClose}/>
            </View>
        </Modal>

    )
};

export default itemDetails;

const styles = StyleSheet.create({

    poster:{
        alignSelf: 'center',
        width: 150,
        height: 250,
        margin: 20

    },

    buttons:{
        width: '90%',
        marginTop: 15
    },
    movieName:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 50
    },
    modal:{
        padding: 20
    }
});
