import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default function SortPrice({ sortPriceOrder, setSortPriceOrder }) {
  return (
    <View style={styles.container}>
      <Button
        title='Highest'
        style={styles.button}
        color={sortPriceOrder === 'high' ? 'red' : null}
        onPress={() => {
          if (sortPriceOrder === 'high') setSortPriceOrder(null)
          else setSortPriceOrder('high')
        }}
      />
      <Button
        title='Lowest'
        color={sortPriceOrder === 'low' ? 'red' : null}
        onPress={() => {
          if (sortPriceOrder === 'low') setSortPriceOrder(null)
          else setSortPriceOrder('low')
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'red'
  }
});
