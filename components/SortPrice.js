import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default function SortPrice({ route, navigation }) {
  const { setSortPriceOrder } = route.params;

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
