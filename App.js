import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import WelcomeScreen from "./screen/Welcome";
//import "bootstrap/dist/css/bootstrap.css" -ignore - used in react, but not sure about react native

export default function App() {
  return <WelcomeScreen />;
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
