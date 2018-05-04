import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const itemDetails = (props) => {
    let modalContent = null;
    if(props.selectedItem){
        const image = 'https://image.tmdb.org/t/p/w154' + props.selectedItem.poster_path;
        modalContent = (
            <View>
                <Image
                    style={styles.poster}
                    source={{uri: image }} />
                <Text>{props.selectedItem.title}</Text>
            </View>
        );
    }
    return(
        <Modal onRequestClose={props.onModalClose} visible={props.selectedItem != null} animationType={'slide'}>
            <View>
                {modalContent}
                <Button style={styles.buttons} title={"Add to My List"} color={"blue"} onPress={props.onItemSelected}/>
                <Button style={styles.buttons} title={"Close"} color={"red"} onPress={props.onModalClose}/>
            </View>
        </Modal>

    )
};

export default itemDetails;

const styles = StyleSheet.create({

    poster:{
        width: 150,
        height: 250,
        alignItems: 'center'
    },

    buttons:{
        width: '90%',
        margin: 5
    },
    placeName:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    }
});
