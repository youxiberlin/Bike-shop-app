import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

// todo move to another directory
const sizes = ['51', '53', '55', '57', '58']
export default function SizeFilter({
  filteredSizes,
  filterSizeHandler
}) {
  return (
    <View style={styles.container}>
      {sizes.map(item => (
        <Button
          key={item}
          title={item}
          color={filteredSizes.includes(item) ? "red" : null}
          onPress={() => filterSizeHandler(item)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  }
});
