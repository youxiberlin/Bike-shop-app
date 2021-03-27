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
      <View>
        <Text style={styles.label}>
          Price Order
        </Text>
      </View>
      <View style={styles.buttons}>
      {sizes.map(item => (
        <Text
          key={item}
          style={filteredSizes.includes(item) ? styles.buttonActive : styles.button}
          onPress={() => filterSizeHandler(item)}
        >
         {item}
        </Text>
        // <Button
        //   key={item}
        //   title={item}
        //   color={filteredSizes.includes(item) ? "red" : null}
        //   onPress={() => filterSizeHandler(item)}
        // />
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
