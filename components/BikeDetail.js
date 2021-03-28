import React from 'react';
import { View, StyleSheet, Image, Text, Button, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function BikeDetail({ name, price, images, category, size }) {
  const sizeItems = Object.keys(size)
    .map(item => {
          const itemObj = {
            label: `${item} - ${size[item] ? `${size[item]} left` : 'Sold out'}`,
            value: item,
          }
          return itemObj
        })

  const menuItems = [{label: 'Size', value: 'size', hidden: true }, ...sizeItems]

  return (
    <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true} 
          paginationStyle={styles.pagination}
        >
          {images.map(image => (
            <View style={styles.slide} key={image}>
              <Image
                style={styles.image}
                source={{ uri: image }}
              />
           </View>
          ))}
        </Swiper>
      <View style={styles.itemInfo}>
        <DropDownPicker
          defaultValue='size'
          items={menuItems}
        />
        <Text style={styles.itemCategory}>{category}</Text>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{price} €</Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 30,
  },
  wrapper: {
    // height: '100%',
    height: 280,
    // height: 0.8,
    // backgroundColor: 'black'
  },
  pagination: {
    position:'absolute',
    bottom: 20
  },
  slide: {
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  itemInfo: {
    flex: 1,
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
    marginVertical: 8
  }
});
