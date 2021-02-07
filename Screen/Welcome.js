//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground,StyleSheet, TouchableHighlight, View, Text, Image, SafeAreaView} from 'react-native';

function WelcomeScreen(props){
    return (
        //source={require("../assets/icon.png")}
        <ImageBackground
            style= {styles.background}
            image source = {require("../assets/welcomeBack.png")}
            >
            <Text 
                alignItems = 'center'
                style = {styles.title}>
                MIRACLE WELCOME BACK
            </Text>
            <Image 
            style = {styles.avatarImage}
            source = {require("../assets/bunny.png")}/>
            
            <View
                style = {styles.welcomeButton}
            >
                <TouchableHighlight>
                    <Text style = {styles.styledText}>
                        start here
                    </Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        backgroundColor: '#8383C6',
        alignItems: 'center',
        justifyContent: 'flex-end',
        //flexWrap: "wrap"
    },
    avatarImage:{
        height: "50%",
        width : "80%",
        position: 'absolute', 
        top: 220
    },
    welcomeButton: {
        borderWidth:3,
        borderColor:'#8383C6',
        borderRadius: 10,
        width: "70%",
        height: 70, 
        backgroundColor: '#A982B4',
        top: -100,
        //alignItems: 'center'
    },
    styledText: {
        color: 'black',
        fontSize: 40,
        right: -30
    },
    capitalLetter:{
        color: 'black',
        fontSize: 20
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 35,
        top: -550
        
    },
});

export default WelcomeScreen;