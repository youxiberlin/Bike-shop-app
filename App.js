import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import fb from './firebase';

import HomeScreen from './screen/HomeScreen';
import BikeDetailScreen from './screen/BikeDetailScreen';
import bikes from './data/bikeArray';

// Adding bike data to 'bikes'collection
bikes.forEach((data) => 
  fb.firestore().collection('bikes').add(data)
)
//

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bike Catalog" component={HomeScreen} />
        <Stack.Screen
         name="BikeDetailScreen"
         component={BikeDetailScreen}
         options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
