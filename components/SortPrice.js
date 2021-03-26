import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default function SortPrice({ sortPriceOrder, setSortPriceOrder }) {
  return (
    <View style={styles.container}>
      <Button
        title='Highest'
        color={sortPriceOrder === 'high' ? 'red' : null}
        onPress={() => setSortPriceOrder('high')}
      />
      <Button
        title='Lowest'
        color={sortPriceOrder === 'low' ? 'red' : null}
        onPress={() => setSortPriceOrder('low')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
  }
});
