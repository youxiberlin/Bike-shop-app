import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';
import BikeCard from './BikeCard';

export default function BikeList({ bikes, navigation }) {
  return (
    <View style={styles.container}>
      {bikes.map(item => (
          <BikeCard
            key={item.id}
            name={item.name}
            images={item.images}
            category={item.category}
            price={item.price}
            navigation={navigation}
          />
       ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    // backgroundColor: 'blue',
  }
});
