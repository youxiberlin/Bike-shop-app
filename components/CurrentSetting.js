import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default function CurrentSetting({
  sortPriceOrder,
  filteredCategories,
  filteredSizes,
  minPrice,
  maxPrice
}) {
  return (
    <View style={styles.container}>
      {sortPriceOrder ? <Text>sortPriceOrder: {sortPriceOrder}</Text> : null}
      {filteredCategories.length ?
        filteredCategories.map(category => <Text key={category}>{category}</Text>) :
      null}
      {filteredSizes.length ?
        filteredSizes.map(size => <Text key={size}>{size}</Text>) :
      null}
      {minPrice || maxPrice ? <Text>min: {minPrice} max: {maxPrice}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  }
});
