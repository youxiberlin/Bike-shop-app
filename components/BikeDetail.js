import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default function BikeDetail({ name, price, images }) {
  return (
    <View style={styles.container}>
      <Text>Bike Detail is here</Text>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Image
        style={styles.image}
        source={{ uri: images[0] }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain'
  }
});
