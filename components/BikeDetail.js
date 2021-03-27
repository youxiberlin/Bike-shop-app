import React from 'react';
import { View, StyleSheet, Image, Text, Button, Pressable } from 'react-native'

export default function BikeDetail({ name, price, images, category }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: images[0] }}
        />
      </Pressable>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{price} €</Text>
        <Text style={styles.itemCategory}>{category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain'
  },
  imageContainer: {
    height: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemInfo: {
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  itemName: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: '600'
  },
  itemCategory: {
    fontSize: 18,
    marginTop: 8
  },
  itemPrice: {
    fontSize: 20,
    marginTop: 8
  }
});
