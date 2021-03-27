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
      <View>
        <Text style={styles.label}>
          Price Range
        </Text>
      </View>
      <View style={styles.inputs}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // flexDirection: 'row',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  inputs: {
    flexDirection: 'row',
  },
  priceInput: {
    height: 25,
    borderWidth: 1,
    width: 100,
    margin: 10,
  },
});
