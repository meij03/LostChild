//import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import appRoute from './appRoute'
import WelcomePage from './screen/Welcome';
import CharacterSelect from './screen/Character';
const stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name = "Welcome" component = {WelcomePage}/>
        <stack.Screen name = "Character" component = {CharacterSelect}/>
      </stack.Navigator>
    </NavigationContainer>
  );
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
