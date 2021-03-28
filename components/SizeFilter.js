import React from 'react';
import { View, StyleSheet, Text, } from 'react-native'
import { bikeSizes } from '../config';

export default function SizeFilter({
  filteredSizes,
  filterSizeHandler
}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>
          Price Order
        </Text>
      </View>
      <View style={styles.buttons}>
      {bikeSizes.map(item => (
        <Text
          key={item}
          style={filteredSizes.includes(item) ? styles.buttonActive : styles.button}
          onPress={() => filterSizeHandler(item)}
        >
         {item}
        </Text>
      ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    padding: 12
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 18,
    marginHorizontal: 8,
  },
  buttonActive: {
    backgroundColor: 'white',
    color: 'red',
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 18,
    marginHorizontal: 8,
  },
});
