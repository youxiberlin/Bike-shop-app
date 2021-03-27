import React from 'react';
import { View, StyleSheet, Image, Text, Button, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';

export default function BikeDetail({ name, price, images, category }) {
  return (
    <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={true} paginationStyle={{position:'absolute', bottom: 50}}>
          {images.map(image => (
            <View style={styles.slide}>
              <Image
                key={image}
                style={styles.image}
                source={{ uri: image }}
              />
           </View>
          ))}
        </Swiper>
      <View style={styles.itemInfo}>
        <Text style={styles.itemCategory}>{category}</Text>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{price} €</Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: '70%'
  },
  slide: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 30
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  itemInfo: {
    paddingHorizontal: 30,
  },
  itemName: {
    fontSize: 24,
    fontWeight: '600'
  },
  itemCategory: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 20,
    marginTop: 8
  }
});
