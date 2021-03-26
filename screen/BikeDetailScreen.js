import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function BikeDetailScreen({ route }) {
  const { name, price, images } = route.params;
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
