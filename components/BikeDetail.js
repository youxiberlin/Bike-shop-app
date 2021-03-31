import React, {useState} from 'react';
import { View, StyleSheet, Image, Text, Button, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';

export default function BikeDetail({ name, price, images, category, size, id, uid }) {
  const [chosenSize, setChosenSize] = useState(null);
  const sizeItems = Object.keys(size)
    .map(item => {
          const stock = size[item];
          const itemObj = {
            label: `${item} - ${stock ? `${stock} left` : 'Sold out'}`,
            value: item,
            untouchable: stock ? false : true,
            textStyle: stock ? { color: 'black' } : { color: '#aaa'}
          };
          return itemObj;
        });

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
          style={{
            backgroundColor: '#fafafa'
          }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{
            backgroundColor: '#fafafa', 
            marginTop: -50
          }}
          items={menuItems}
          containerStyle={{
            height: 40
          }}
          onChangeItem={item => setChosenSize(item.value)}
        />
        <Button
          title="Add to Cart"
          onPress={() => {
            firebase.firestore().collection("orders").add({
              uid,
              bikeId: id,
              size: chosenSize
            })
          }}
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
