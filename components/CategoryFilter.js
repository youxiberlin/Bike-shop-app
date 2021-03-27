import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default function CategoryFilter({
    bikeCategories,
    filteredCategories,
    filterCategoryHandler
  }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>
          Categories
        </Text>
      </View>
      <View style={styles.buttons}>
      {bikeCategories.map(item => (
        <Text
          key={item}
          style={filteredCategories.includes(item) ? styles.buttonActive : styles.button}
          onPress={() => filterCategoryHandler(item)}
        >
          {item}
        </Text>))}
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18,
    marginHorizontal: 6,
  },
  buttonActive: {
    backgroundColor: 'white',
    color: 'red',
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 18,
    marginHorizontal: 6,
  },
});
