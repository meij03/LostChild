import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground,StyleSheet, TouchableHighlight, View, Text, Image, SafeAreaView} from 'react-native';

function characterSelect(props){
    //console.log("hello world");
    return (
        //source={require("../assets/icon.png")}
        <ImageBackground
            style= {styles.background}
            image source = {require("../assets/welcomeBack.png")}
            >
                <Text 
                style = {styles.mytitle}>
                character page
            </Text>
            
            
             <Image 
                style = {styles.avatarCat}
                source = {require("../assets/bunny.png")}/>
            < Image  
            
            style = {styles.avatarDog}
                source = {require("../assets/arrogantCat.png")}/>
            < Image 
                style = {styles.avatarRabbit}
                source = {require("../assets/awkwardDog.png")}/>
           
                
        </ImageBackground>
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
    avatarCat:{
        //avatar cat - positioning and size
        height: "50%",
        width : "80%",
        position: 'absolute', 
        top: 220
    },
    
    avatarDog:{
        //avatar dog - positioning and size
        height: "50%",
        width : "80%",
        position: 'absolute', 
        top: 100
    },
    
    avatarRabbit:{
        //avatar rabbit - positioning and size
        height: "50%",
        width : "80%",
        position: 'absolute', 
        top: 50
    },
    
    mytitle: {
        //Title
        fontWeight: 'bold',
        color: 'black',
        fontSize: 35,
        top: -550
        
    },
});
 
export default characterSelect;