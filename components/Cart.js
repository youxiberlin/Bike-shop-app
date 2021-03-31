import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default function Cart({ items }) {
  // console.log('cart items',items)

  return (
    <View style={styles.container}>
      {items.map(item => (
        <View key={item.bikeId}>
          <Text>bikeId: {item.bikeId}</Text>
          <Text>Size: {item.size}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // flexDirection: 'row',
  }
});
