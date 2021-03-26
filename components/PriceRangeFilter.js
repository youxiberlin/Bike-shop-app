import React from 'react';
import { View, StyleSheet, Image, Text, Button, TextInput } from 'react-native'

export default function PriceRangeFilter({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.priceInput}
        placeholder="minimum"
        value={minPrice}
        onChangeText={setMinPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.priceInput}
        placeholder="max"
        value={maxPrice}
        onChangeText={setMaxPrice}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  priceInput: {
    height: 20,
    borderWidth: 1,
    width: 100,
    margin: 10,
  },
});
