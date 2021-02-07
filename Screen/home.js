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

function myHome({navigation}, props){
    return (
        //background image of flooring
        <ImageBackground
            style= {styles.background}
            image source = {require("../assets/woodfloor.jpg")}
            >
        
            <Text  style = {styles.score}> 150 </Text>
            
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
            <View style = {styles.mapBackground}>
            {/* touchable opacity makes an image clickable and below code does nto gives alert message but also 
            there are no errors. Checker to see if onPress works for map icon
            <TouchableOpacity  onPress={()=> {Alert.alert('You clicked it!', 'You clicked it!')}} >
            */}
            
                <TouchableOpacity 
                    //Navigation set up to bring you to the character's page
                    //when clicked or pressed
                    onPress = {() => navigation.navigate('Maps')}>
                        
                    <Text style = {styles.styledText}>
                        Maps
                    </Text>
                </TouchableOpacity>

            </View>
            <Image 
            style = {styles.maps1}
            source = {require("../assets/maps1.png")}/>
            <Image 
            style = {styles.mywindow}
            source = {require("../assets/window-edited.png")}/>

            {/* <View style = {StyleSheet.mapBackground}>
                <Text>
                    Hello worldMap
                </Text>
            </View> */}
          
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
        width : "20%",
        position: 'absolute',
        top: 1,
        right:90
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
        top: 400,
        right:5
    },
    maps1:{
        //avatar image - positioning and size
        height: "10%",
        width : "25%",
        position: 'absolute',
        top: 410,
        left:5
    },
    mapBackground:{
        backgroundColor: 'white',
        borderRadius: 40,
        height: "10%",
        width : "20%",
        position: 'absolute',
        top: 390,
        left:5,
        alignItems:'center'
    },
    text:{
        fontSize:60,
        alignItems: 'center'
    },
    park:{
        //avatar image - positioning and size
        height: "20%",
        width : "55%",
        position: 'absolute',
        top: 150, 
        left:90
    },
    mywindow:{
        //avatar image - positioning and size
        height: "30%",
        width : "75%",
        position: 'absolute',
        opacity:0.8,
        top: 120,
       
        left:45
    },
    score: {
        //score:150
        fontWeight: 'bold',
        color: 'black',
        fontSize: 35,
        position: 'absolute',
        top: 25,
        right:10

    },
});

export default myHome;