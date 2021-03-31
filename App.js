import React, { Component, useState, useEffect } from 'react';
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

export default function App (){
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoaded(true);
      } else {
        setUser({
          uid: user.uid,
          email: user.email
        })
        setLoaded(true);
        setLoggedIn(true);
      }
    })
  }, [])

  return (
    loggedIn ? (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Bike Catalog">
              {(props) => <HomeScreen {...props} user={user}/>}
            </Stack.Screen>
            <Stack.Screen
             name="BikeDetailScreen"
             component={BikeDetailScreen}
             options={({ route }) => ({ title: route.params.name })}
            />
           </Stack.Navigator>
     </NavigationContainer>
    ) : loaded ? (
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
    ) : (
      <View>
        <Text>
          loading
        </Text>
     </View>
    )
  )
}
