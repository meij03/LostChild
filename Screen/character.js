import React from 'react';
import {StyleSheet,Text} from 'react-native';
//import {setCustomText} from 'react-native-global-props'

function characterSelect(props){
    return (
        <Text>
            hello
        </Text>
    );
}

const styles = StyleSheet.create({
    background: {
        //Background image style- it affects other components as well
        //because the button and image are both inside of the imageBackground component
        flex: 1, 
        backgroundColor: '#8383C6',
        alignItems: 'center',
        justifyContent: 'flex-end',
        //flexWrap: "wrap"
    },
    avatarImage:{
        //avatar image - positioning and size
        height: "50%",
        width : "80%",
        position: 'absolute', 
        top: 220
    },
    welcomeButton: {
        //Button style
        borderWidth:3,
        borderColor:'#8383C6',
        borderRadius: 10,
        width: "70%",
        height: 70, 
        backgroundColor: '#b3d0ce',
        top: -100,
        //alignItems: 'center'
    },
    styledText: {
        //Font of the button
        color: 'black',
        fontSize: 40,
        right: -30
    },
    title: {
        //Title
        fontWeight: 'bold',
        color: 'black',
        fontSize: 35,
        top: -550
        
    },
});

export default characterSelect;