import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default function CategoryFilter({
  bikeCategories,
  filteredCategories,
  filterCategoryHandler
}) {
  return (
    <View style={styles.container}>
      {bikeCategories.map(item => (
        <Button
          key={item}
          title={item}
          color={filteredCategories.includes(item) ? "red" : null}
          onPress={() => filterCategoryHandler(item)}
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
