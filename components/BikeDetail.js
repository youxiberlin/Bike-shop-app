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
        <Text style={styles.itemCategory}>{category}</Text>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{price} €</Text>
        <DropDownPicker
          defaultValue='size'
          items={menuItems}
          containerStyle={{height: 40}}
        />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  wrapper: {
    height: 280,
  },
  pagination: {
    position:'absolute',
    bottom: 20
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  itemInfo: {
    flex: 1,
    paddingHorizontal: 20,
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
