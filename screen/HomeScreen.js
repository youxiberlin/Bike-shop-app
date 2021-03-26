import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Button, Modal, Pressable } from 'react-native';
import { compose, sort } from 'ramda'
import { orderLowest, orderHighest } from '../lib/utils';
import BikeCard from '../components/BikeCard';
import SettingModal from '../components/SettingModal';
import bikeData from '../data/bike-data';

export default function HomeScreen({ navigation, route }) {
  let bikes = bikeData;

  const [sortPriceOrder, setSortPriceOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  bikes = sortPriceOrder && sortPriceOrder === 'high' ?
    compose(sort(orderHighest))(bikes) :
    compose(sort(orderLowest))(bikes)


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => setModalVisible(true)} title="setting" />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <SettingModal
          {...{
            modalVisible,
            setModalVisible,
            sortPriceOrder,
            setSortPriceOrder
          }}
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
  }
});
