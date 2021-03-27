import React from 'react';
import { View, StyleSheet, Image, Text, Button, Pressable } from 'react-native'

export default function BikeCard({ name, images, price, category, navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.imageContainer}
        onPress={() => navigation.navigate('BikeDetailScreen', {
          name, price, images
        })}
      >
        <Image
          style={styles.image}
          source={{ uri: images[0] }}
        />
      </Pressable>
      <View style={styles.itemInfo}>
        <Text
          onPress={() => navigation.navigate('BikeDetailScreen', {
            name, price, images
          })}
          style={styles.itemName}>{name}</Text>
        <Text style={styles.itemCategory}>{category}</Text>
        <Text style={styles.itemPrice}>€ {price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 300,
    padding: 5,
    flexDirection: 'column'
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    padding: 10,
    borderWidth: 1,
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
