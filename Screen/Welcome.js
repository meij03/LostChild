import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground,StyleSheet, TouchableHighlight, View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
//import {setCustomText} from 'react-native-global-props'
//import {characterSelect} from './character'

function WelcomeScreen(props){
    return (
        //source={require("../assets/icon.png")}
        <ImageBackground
            style= {styles.background}
            image source = {require("../assets/welcomeBack.png")}
            >
            <Text 
                style = {styles.title}>
                MIRACLE WELCOME BACK
            </Text>
            
            <Image 
            style = {styles.avatarBunny}
            source = {require("../assets/bunny.png")}/>

            
            <View
                //Button 
                style = {styles.welcomeButton} 
            >
                <TouchableOpacity 
                    onPress = {() => console.log("Button pressed")}>
                    <Text style = {styles.styledText}>
                        start here
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

// const customTextProps = {
//     //custom text <-- contribution from 'react-native-global-props
//     style: {
//       fontSize: 16,
//       fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
//       color: 'black'
//     }
//   };

//setCustomText(customTextProps);
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

export default WelcomeScreen;