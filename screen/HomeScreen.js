import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Button, Modal, Pressable } from 'react-native';
import { compose, filter, sort, includes } from 'ramda'
import { orderLowest, orderHighest } from '../lib/utils';
import BikeCard from '../components/BikeCard';
import SettingModal from '../components/SettingModal';
import bikeData from '../data/bike-data';

// bike categories can be put in a config or fetch from database in production
const bikeCategories = ['road', 'city', 'e-bike', 'mountain']

export default function HomeScreen({ navigation, route }) {
  const [sortPriceOrder, setSortPriceOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);
  
  const filterCategoryHandler = (category) => {
    const addToCategories = item => setFilteredCategories([...filteredCategories, item]);
    const removeFromCategories = (item) => {
      const newArr= filteredCategories.filter(elem => elem !== item);
      setFilteredCategories(newArr);
    }
    if (filteredCategories.includes(category)) removeFromCategories(category)
    else addToCategories(category)
  }

  const filterByCategory = v => includes(v.category, filteredCategories)
  const fns = {
    high: orderHighest,
    low: orderLowest
  }
  const bikes = filteredCategories.length && sortPriceOrder ?
      compose(filter(filterByCategory), sort(fns[sortPriceOrder]))(bikeData) :
    filteredCategories.length ?
      compose(filter(filterByCategory))(bikeData) :
    sortPriceOrder ?
      compose(sort(fns[sortPriceOrder]))(bikeData) :
    bikeData
  console.log(bikes.map(bike => `${bike.category}: ${bike.price}`))


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
            setSortPriceOrder,
            bikeCategories,
            filteredCategories,
            filterCategoryHandler
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
