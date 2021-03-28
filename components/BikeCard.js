import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';

export default function BikeCard({
     name,
     price,
     images,
     category,
     size,
     navigation
  }) {
  const bikeDetailNavigator = () => navigation.navigate('BikeDetailScreen', {
    name, price, images, category, size
  })
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.imageContainer}
        onPress={bikeDetailNavigator}
      >
        <Image
          style={styles.image}
          source={{ uri: images[0] }}
        />
      </Pressable> 
      <View style={styles.itemInfo}>
        <Text
          onPress={bikeDetailNavigator}
          style={styles.itemName}>{name}</Text>
        <Text style={styles.itemCategory}>{category}</Text>
        <Text style={styles.itemPrice}>€ {price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 280,
    padding: 5,
    backgroundColor: 'white',
    margin: 8,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    padding: 10,
    borderColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  itemInfo : {
  },
  itemName: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10
  },
  itemCategory: {
    fontSize: 16,
    marginTop: 8
  },
  itemPrice: {
    marginTop:8
  }
});
