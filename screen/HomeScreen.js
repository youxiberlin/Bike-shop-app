import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';

import BikeCard from '../components/BikeCard';

import bikeData from '../data/bike-data';

export default function HomeScreen({ navigation, route }) {
  let bikes = bikeData;

  const [sortPriceOrder, setSortPriceOrder] = useState(null);


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
