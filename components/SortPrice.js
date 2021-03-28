import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function SortPrice({ sortPriceOrder, setSortPriceOrder }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>
          Price Order
        </Text>
      </View>
      <View style={styles.buttons}>
        <Text
          style={sortPriceOrder === 'high' ? styles.buttonActive : styles.button}
          onPress={() => {
            if (sortPriceOrder === 'high') setSortPriceOrder(null)
            else setSortPriceOrder('high')
          }}
        >
          Highest
        </Text>
        <Text
          style={sortPriceOrder === 'low' ? styles.buttonActive : styles.button}
          onPress={() => {
            if (sortPriceOrder === 'low') setSortPriceOrder(null)
            else setSortPriceOrder('low')
          }}
        >
          Lowest
        </Text>
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
    marginHorizontal: 10,
  },
  buttonActive: {
    backgroundColor: 'white',
    color: 'red',
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 18,
    marginHorizontal: 10,
  },
});
