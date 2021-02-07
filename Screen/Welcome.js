import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground,
    StyleSheet,  
    View, 
    Text, 
    Image, 
    TouchableOpacity} 
    from 'react-native';
import app from '../App';



//import characterSelect from './Character';

function WelcomePage({navigation},props){
    return (
        //source={require("../assets/icon.png")}
        <ImageBackground
            style= {styles.background}
            image source = {require("../assets/welcomeBack.png")}
            >
            <Text 
                //Title 
                style = {styles.title}>
                MIRACLE WELCOME BACK
            </Text>
            
            <Image 
            //Image of bunny
            style = {styles.avatarBunny}
            source = {require("../assets/bunny.png")}/>

            
             <View
                //Welcome Button 
                style = {styles.welcomeButton} 
            >
                <TouchableOpacity 
                    //Navigation set up to bring you to the character's page
                    //when clicked or pressed
                    onPress = {() => navigation.navigate('Character')}>
                    
                    <Text style = {styles.styledText}>
                        start here
                    </Text>
                </TouchableOpacity>
            </View> 
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
        //avatar image - positioning and size
        height: "55%",
        width : "80%",
        position: 'absolute', 
        top: 150
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


export default WelcomePage;