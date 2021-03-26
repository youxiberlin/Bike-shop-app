import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default function SortPrice({ setSortPriceOrder }) {
  return (
    <View style={styles.container}>
      <Button
        title='Highest'
        onPress={() => setSortPriceOrder('high')}
      />
      <Button
        title='Lowest'
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
