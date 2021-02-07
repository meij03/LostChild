import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground,
    StyleSheet, 
    View, 
    Text, 
    Image, 
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import app from '../App';

function characterSelect({navigation}, props){
    //console.log("hello world");
    return (
        //source={require("../assets/icon.png")}
        <ImageBackground
            style= {styles.background}
            image source = {require("../assets/welcomeBack.png")}
            >
            
            <Image 
                //resizeMode = "contain"
                style = {styles.avatarBunny}
                source = {require("../assets/bunny.png")}/>
             < Image  
                style = {styles.avatarCat}
                source = {require("../assets/arrogantCat.png")}/>
            < Image 
                style = {styles.avatarDog}
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
    avatarBunny:{
        //avatar cat - positioning and size
        height: "30%",
        width : "40%",
        position: 'absolute', 
        top: 40,
        left: 40
    },
    
    avatarCat:{
        //avatar Cat - positioning and size
        height: "30%",
        width : "40%",
        position: 'absolute', 
        top: 200,
        right: 20
    },
    
    avatarDog:{
        //avatar Dog - positioning and size
        height: "30%",
        width : "40%",
        position: 'absolute', 
        top: 350,
        left: 30
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