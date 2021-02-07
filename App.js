//import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from './screen/Welcome';
import characterSelect from './screen/character';
import worldMap from './screen/map'; 
import myHome from './screen/home'
const stack = createStackNavigator();

export default function App() {
  return (
    //Created a stack navigator where it is in order 
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name = "Welcome" component = {WelcomePage}/>
        <stack.Screen name = "Character" component = {characterSelect}/>
        <stack.Screen name = "Home" component = {myHome}/>
        <stack.Screen name = "Maps" component = {worldMap}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
