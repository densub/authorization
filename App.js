import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3tJ2CJg2FJEKLbXvDue67-r_u-JnrxJ0",
  authDomain: "instagram-clone-41f56.firebaseapp.com",
  projectId: "instagram-clone-41f56",
  storageBucket: "instagram-clone-41f56.appspot.com",
  messagingSenderId: "600245513537",
  appId: "1:600245513537:web:0241f495d82fae6b6005c0",
  measurementId: "G-5HSM8BPB65"
};

initializeApp(firebaseConfig);

const Stack = createStackNavigator()

import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false
    }
  }


  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component= {LandingScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="Register" component= {RegisterScreen}/>
          </Stack.Navigator>
      </NavigationContainer>  
    );
  }
}

export default App

