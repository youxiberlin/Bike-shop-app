import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen';
import BikeDetailScreen from './screen/BikeDetailScreen';

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
