import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Button } from 'react-native';
import { compose, filter, sort } from 'ramda'
import { byCategory, byPriceRange, byPriceOrder, applySizeFilter, } from '../lib/utils';
import SettingModal from '../components/SettingModal';
import CurrentSetting from '../components/CurrentSetting';
import BikeList from '../components/BikeList';
import bikeData from '../data/bike-data';

export default function HomeScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => setModalVisible(true)} title="Filter" />
        ),
      });
    }, [navigation]);

  const [sortPriceOrder, setSortPriceOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [filteredSizes, setFilterSizes] = useState([]);

  const clearSettingHandler = () => {
    setSortPriceOrder(null);
    setFilteredCategories([]);
    setMinPrice(null);
    setMaxPrice(null);
    setFilterSizes([]);
  };

  const filterSizeHandler = (size) => {
    const addToSizes = item => setFilterSizes([...filteredSizes, item]);
    const removeFromSizes = (item) => {
      const newArr = filteredSizes.filter(elem => elem !== item);
      setFilterSizes(newArr);
    }
    if (filteredSizes.includes(size)) removeFromSizes(size);
    else addToSizes(size);
  };

  const filterCategoryHandler = (category) => {
    const addToCategories = item => setFilteredCategories([...filteredCategories, item]);
    const removeFromCategories = (item) => {
      const newArr= filteredCategories.filter(elem => elem !== item);
      setFilteredCategories(newArr);
    }
    if (filteredCategories.includes(category)) removeFromCategories(category);
    else addToCategories(category);
  };

  const bikes = compose(
    filter(byCategory(filteredCategories)),
    filter(byPriceRange(minPrice, maxPrice)),
    sort(byPriceOrder(sortPriceOrder)),
    applySizeFilter(filteredSizes)
  )(bikeData)

  return (
    <ScrollView>
      <View style={styles.container}>
        <SettingModal
          {...{
            modalVisible,
            setModalVisible,
            sortPriceOrder,
            setSortPriceOrder,
            filteredCategories,
            filterCategoryHandler,
            minPrice,
            setMinPrice,
            maxPrice,
            setMaxPrice,
            filteredSizes,
            filterSizeHandler,
            clearSettingHandler
          }}
        />
        <CurrentSetting
          {...{
            sortPriceOrder,
            filteredCategories,
            filteredSizes,
            minPrice,
            maxPrice
          }}
        />
        <BikeList
          {...{
            bikes,
            navigation
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
});
