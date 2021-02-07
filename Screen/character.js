import React from 'react';
import { ImageBackground,
    StyleSheet, 
    View, 
    Text, 
    Image, 
    TouchableOpacity,
} from 'react-native';
import app from '../App';

//Character's page: Where user is able to choose they're selected avatar, then
//be able to move to the home page. Where they're able to interact with 
//they're selected avatar.

function characterSelect({navigation}, props){
    return (
        <ImageBackground
            style= {styles.background}
            image source = {require("../assets/welcomeBack.png")}
            >

            <Image 
                //Image of a bunny (main bunny seen in welcome page)
                style = {styles.avatarBunny}
                source = {require("../assets/bunny.png")}/>
            
            
            < Image  
                //Image of cat 
                style = {styles.avatarCat}
                source = {require("../assets/arrogantCat.png")}/>
            < Image 
                //Image of dog
                style = {styles.avatarDog}
                source = {require("../assets/awkwardDog.png")}/> 

            <View
                //Button that will bring you to the home pages
                style = {styles.Button} 
                >
                <TouchableOpacity 
                    onPress = {() => navigation.navigate('Home')}>
                    
                    <Text style = {styles.styledText}>
                        Home
                    </Text>
                </TouchableOpacity>
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
    },
    Button: {
        //Button style
        borderWidth:3,
        borderColor:'#8383C6',
        borderRadius: 10,
        width: "30%",
        height:100, 
        backgroundColor: '#b3d0ce',
        top: -100,
        left: 80
    },
    styledText: {
        //Font of the button
        color: 'black',
        fontSize: 25,
        right: -30,
        alignItems: 'center',
        justifyContent: "center",
        top: 30,
        left: 10
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