import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';

import BikeCard from '../components/BikeCard';

import bikeData from '../data/bike-data';

export default function HomeScreen({ navigation }) {
  let bikes = bikeData;

  return (
    <ScrollView>
      <View style={styles.container}>
        {bikes.map(item => (
          <BikeCard
            key={item.id}
            name={item.name}
            images={item.images}
            price={item.price}
            navigation={navigation}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
