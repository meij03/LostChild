//This file is made from 'Welcome.js' and no changes were required to be done for using this 'Welcome.js'
//There are two fixes which are to be done: (1) Making maps1 image clickable (2) fixing the 'window' and 'park' images.
//Below is the code:


function WelcomeScreen(props){
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
             <Image 
            style = {styles.maps1}
            source = {require("../assets/maps1.png")}/>
            <Image 
            style = {styles.window}
            source = {require("../assets/mywindow.png")}>
          </Image>
        
          
        <View>
        {/* touchable opacity makes an image clickable and below code does nto gives alert message but also 
        there are no errors.  */}
        <TouchableOpacity  onPress={()=> {Alert.alert('You clicked it!', 'You clicked it!')}} >
 
        <Image 
            style = {styles.maps1}
            source = {require("../assets/maps1.png")}/>
          
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
        right:70
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
        width : "90%",
        position: 'absolute',
        opacity:0.8,
        top: 120,
       
        left:45
    },
    mywindow:{
        //avatar image - positioning and size
        height: "28%",
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

export default WelcomeScreen;
