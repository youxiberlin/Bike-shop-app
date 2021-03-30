import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Image, Text, Button, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';


import HomeScreen from './screen/HomeScreen';
import BikeDetailScreen from './screen/BikeDetailScreen';
import Register from './components/Register'
import bikes from './data/bikeArray';

// Adding bike data to 'bikes'collection
// bikes.forEach((data) => 
//   fb.firestore().collection('bikes').add(data)
// )
//

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
}


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Stack = createStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log('user', user.email)
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
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
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View>
          <Text>
            loading
          </Text>
        </View>
      )
    }
    if (loggedIn) {
      return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bike Catalog"
            component={HomeScreen}
          />
          <Stack.Screen
           name="BikeDetailScreen"
           component={BikeDetailScreen}
           options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator> 
      </NavigationContainer>
      )
    }
    return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
