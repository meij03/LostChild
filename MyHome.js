//This file is made from 'Welcome.js' and no changes were required to be done for using this 'Welcome.js'
//There are two fixes which are to be done: (1) Making maps1 image clickable (2) fixing the 'window' and 'park' images.
//Below is the code:

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground,StyleSheet, TouchableHighlight, View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';

function WelcomeScreen(props){
    return (
        //source={require("../assets/icon.png")}
        <ImageBackground
            style= {styles.background}
            image source = {require("../assets/woodfloor.jpg")}
            >
               
            <Text 
                style = {styles.title}>
                150
            </Text>
            
            <Image 
            style = {styles.superHero}
            source = {require("../assets/superHero.png")}/>
            <Image 
            style = {styles.coins}
            source = {require("../assets/coins.png")}/>
            <Image 
            style = {styles.progressbar}
            source = {require("../assets/progressbar.png")}/>
              <Image 
            style = {styles.pillow}
            source = {require("../assets/pillow.png")}/>
             <Image 
            style = {styles.maps1}
            source = {require("../assets/maps1.png")}/>
            <Image 
            style = {styles.park}
            source = {require("../assets/park.jpg")}/>
            <Image 
            style = {styles.window}
            source = {require("../assets/window.png")}/>
            
          
           
        </ImageBackground>
    );
    }

const styles = StyleSheet.create({
    background: {
        //Background image style- it affects other components as well
        //because the button and image are both inside of the imageBackground component
        flex: 1, 
        backgroundColor: '#b3d0ce',
        alignItems: 'center',
        justifyContent: 'flex-end',
        //flexWrap: "wrap"
    },
    superHero:{
        //avatar image - positioning and size
        height: "50%",
        width : "90%",
        position: 'absolute', 
        top: 350
    },
    coins:{
        //avatar image - positioning and size
        height: "10%",
        width : "40%",
        position: 'absolute',
        top: 1,
        right:30
    },
    progressbar:{
        //avatar image - positioning and size
        height: "10%",
        width : "40%",
        position: 'absolute',
        top: 1,
        left:10
    },
    pillow:{
        //avatar image - positioning and size
        height: "15%",
        width : "30%",
        position: 'absolute',
        top: 420,
        right:5
    },
    maps1:{
        //avatar image - positioning and size
        height: "10%",
        width : "25%",
        position: 'absolute',
        top: 420,
        left:5
    },
    park:{
        //avatar image - positioning and size
        height: "20%",
        width : "55%",
        position: 'absolute',
        top: 150, 
        left:90
    },
    window:{
        //avatar image - positioning and size
        height: "28%",
        width : "75%",
        position: 'absolute',
        opacity:0.8,
        top: 120,
       
        left:45
    },
    title: {
        //Title
        fontWeight: 'bold',
        color: 'black',
        fontSize: 35,
        position: 'absolute',
        top: 25,
        right:10

    },
});

export default WelcomeScreen;
