import React from 'react';
import { View, StyleSheet, Text, } from 'react-native'

export default function CurrentSetting({
  sortPriceOrder,
  filteredCategories,
  filteredSizes,
  minMaxPrices,
}) {
  const visible = sortPriceOrder ||
    filteredCategories.length ||
    minMaxPrices.length ||
    filteredSizes.length;

  const [minPrice, maxPrice] = minMaxPrices;

  return (
    <View style={visible ? styles.visible : styles.container}>
      {sortPriceOrder ?
        <Text>Price Order: {sortPriceOrder === 'high' ? 'Highest' : 'Lowest'}</Text> 
        : null}
      {filteredCategories.length ?
        <View style={styles.lists}>
          <Text>Categories:</Text>
          {filteredCategories.map(category =>
            <Text style={styles.item} key={category}>{category}</Text>)}
        </View> :
        null}
      {filteredSizes.length ?
        <View style={styles.lists}>
          <Text>Sizes:</Text>
          {filteredSizes.map(size => <Text style={styles.item} key={size}>{size}</Text>)}
        </View>
         :
       null}
      {minMaxPrices.length ?
        <View style={styles.lists}>
          <Text>Price:</Text>
          <Text>min: {minPrice} max: {maxPrice}</Text>
        </View> :
      null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  visible: {
    backgroundColor: '#eee',
    padding: 10,
  },
  lists: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  item: {
    backgroundColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 5,
    marginHorizontal: 3
  }
});
