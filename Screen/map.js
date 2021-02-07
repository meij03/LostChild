import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground,
    StyleSheet,  
    View,  
    Image, 
    TouchableOpacity,
    TouchableHighlight} 
    from 'react-native';
import app from '../App';

function worldMap({navigation},props){
    return (

        <ImageBackground
        style= {styles.background}
        image source = {require("../assets/maps.png")}
        >
        <View
            //cart Button 
            style = { 
            styles.CartButton} 
        >
            <TouchableOpacity 
                onPress = {() => console.log("Grocery")}>
            </TouchableOpacity>
        </View>
        <View
            //mall Button 
            style = { 
            styles.mallButton} 
        >
            <TouchableOpacity 
                onPress = {() => navigation.navigate('mall')}>
            </TouchableOpacity>
        </View> 
        <View
            //home Button 
            style = { 
            styles.homeButton} 
        >
            <TouchableOpacity 
                onPress = {() => navigation.navigate('home')}>
            </TouchableOpacity>
        </View> 
        <View
            //cart Button 
            style = { 
            styles.parkButton} 
        >
            <TouchableOpacity 
                onPress = {() => navigation.navigate('park')}>
            </TouchableOpacity>
        </View>  

        <Image 
        //Cart image
        resizeMode = 'contain'
        style = {styles.cart}
        source = {require("../assets/grocery-removebg-preview.png")}/>
        
        <Image 
        //Mall Image
        resizeMode = 'contain'
        style = {styles.mall}
        source = {require("../assets/mall-building-icon-vector-template-260nw-1396575095-removebg-preview.png")}/>

        <Image 
        //House image
        resizeMode = 'contain'
        style = {styles.house}
        source = {require("../assets/house_icon-removebg-preview.png")}/>

        <Image 
        //Park Image
        resizeMode = 'contain'
        style = {styles.park}
        source = {require("../assets/park_icom-removebg-preview.png")}/>
         
    </ImageBackground>
    )
    
}





const styles = StyleSheet.create({
    background: {
        //Background set up to center fonts/images
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    //Images of icons
    cart:{
        height: "25%",
        width: "25%",
        position: "absolute",
        top: 70,
        left: 30
    },
    mall:{
        height: "30%",
        width: "30%",
        position: "absolute",
        top: 180,
        left: 255
    },
    house: {
        height: "40%",
        width: "40%",
        position: "absolute",
        top: 370,
        left: -10
    },
    park: {
        height: "25%",
        width: "25%",
        position: "absolute",
        top: 490,
        left: 265
    },
    //The background gray spot that serves as a button
    CartButton:{
        backgroundColor:"gray",
        height: "15%",
        width: "30%",
        borderRadius: 100,
        top: -40,
        left: -110
    },
    mallButton:{
        backgroundColor:"gray",
        height: "15%",
        width: "30%",
        borderRadius: 100,
        top: -20,
        left: 120
    },
    homeButton:{
        backgroundColor:"gray",
        height: "15%",
        width: "30%",
        borderRadius: 100,
        top: 100,
        left: -120
    },
    parkButton:{
        backgroundColor:"gray",
        height: "15%",
        width: "30%",
        borderRadius: 100,
        top: 70,
        left: 120
    }
});


export default worldMap;