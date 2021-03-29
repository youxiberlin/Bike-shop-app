import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function PriceRangeFilter({
  minMaxPrices,
  setMinMaxPrices
}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>
          Price Range
        </Text>
        <View style={styles.currPrice}>
          <Text style={styles.min}>min: {minMaxPrices[0]}</Text>
          <Text>max: {minMaxPrices[1]}</Text>
        </View>
        <View style={styles.slider}>
          <MultiSlider
            values={[100,3000]}
            min={100}
            max={2000}
            step={50}
            customLabel={() => <Text>value</Text>}
            onValuesChange={v => setMinMaxPrices(v)}
          />
        </View>
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
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  slider: {
    paddingLeft: 20,
  },
  currPrice: {
    paddingLeft: 12,
    flexDirection: 'row'
  },
  min: {
    paddingRight: 10,
  },
});
