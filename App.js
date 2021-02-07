//import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from './screen/Welcome';
import characterSelect from './screen/character';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name = "Welcome" component = {WelcomePage}/>
        <stack.Screen name = "Character" component = {characterSelect}/>
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
