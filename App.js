import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./env"
import { getAuth } from "firebase/auth"
import { View, Text } from 'react-native'

initializeApp(firebaseConfig);

const Stack = createStackNavigator()

import React, { Component } from 'react'
import Login from './components/auth/Login';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    getAuth().onAuthStateChanged((user) => {
      if(!user){
      this.setState({
        loaded:true,
        loggedIn: false
      })
    } else {
      this.setState({
        loggedIn: true,
        loaded: true
      })
    }
    }) 
  }

  render() {
    const { loggedIn, loaded } = this.state
    if(!loaded) {
        return(
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text>Loading...</Text>
        </View>
        )
    }
    if(!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component= {LandingScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Register" component= {RegisterScreen}/>
            <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>  
      );
    }
    if(loggedIn) {
      return(
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text>User is Logged in</Text>
        </View>
        )
    }
    
  }
}

export default App

