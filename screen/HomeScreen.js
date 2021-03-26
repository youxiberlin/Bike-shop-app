import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';
import { compose, sort } from 'ramda'
import { orderLowest, orderHighest } from '../lib/utils';
import BikeCard from '../components/BikeCard';
import bikeData from '../data/bike-data';

export default function HomeScreen({ navigation, route }) {
  let bikes = bikeData;

  const [sortPriceOrder, setSortPriceOrder] = useState(null);
  bikes = sortPriceOrder && sortPriceOrder === 'high' ?
    compose(sort(orderHighest))(bikes) :
    compose(sort(orderLowest))(bikes)

  return (
    <ScrollView>
      <View style={styles.container}>
      <Button
        title="Setting"
        onPress={() => navigation.navigate('SettingScreen', {
          sortPriceOrder,
          setSortPriceOrder
        })}
      />
      <Text>sortPriceOrder: {sortPriceOrder}</Text>
       {bikes.map(item => (
          <BikeCard
            key={item.id}
            name={item.name}
            images={item.images}
            price={item.price}
            navigation={navigation}
          />
       ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
