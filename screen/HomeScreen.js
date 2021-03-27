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
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [filteredSizes, setFilterSizes] = useState([]);

  const filterSizeHandler = (size) => {
    const addToSizes = item => setFilterSizes([...filteredSizes, item]);
    const removeFromSizes = (item) => {
      const newArr = filteredSizes.filter(elem => elem !== item);
      setFilterSizes(newArr);
    }
    if (filteredSizes.includes(size)) removeFromSizes(size);
    else addToSizes(size);
  }

  const filterCategoryHandler = (category) => {
    const addToCategories = item => setFilteredCategories([...filteredCategories, item]);
    const removeFromCategories = (item) => {
      const newArr= filteredCategories.filter(elem => elem !== item);
      setFilteredCategories(newArr);
    }
    if (filteredCategories.includes(category)) removeFromCategories(category);
    else addToCategories(category);
  };

  const byCategory = (categories) => {
    return categories.length ?
     item => includes(item.category, filteredCategories) :
     item => item;
  };

  const byPriceRange = (min, max) => {
    if (typeof min === 'string' || typeof max === 'string') {
      min = parseInt(min, 10);
      max = parseInt(max, 10);
    }
    if (min && max) return item => item.price >= min && item.price <= max;
    else if (min) return item => item.price >= min;
    else if (max) return item => item.price <= max;
    else return item => item;
  };

  const byPriceOrder = (sortPriceOrder) => {
    const fns = {
      high: orderHighest,
      low: orderLowest
    };
    return sortPriceOrder ? fns[sortPriceOrder] : () => {};
  };

  const bySize = size => item => {
    const availableSizes = Object.keys(item.size).filter(v => item.size[v]);
    return includes(size, availableSizes);
  }

  const applySizeFilter = sizes => items => {
      return sizes.length ?
        sizes.reduce((acc, curr) => {
            const res = filter(bySize(curr), items);
            return [...new Set([...acc, ...res])];
          }, []) :
        items;
  }

  const bikes = compose(
    filter(byCategory(filteredCategories)),
    filter(byPriceRange(minPrice, maxPrice)),
    sort(byPriceOrder(sortPriceOrder)),
    applySizeFilter(filteredSizes)
  )(bikeData)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => setModalVisible(true)} title="setting" />
        ),
      });
    }, [navigation]);
    
  console.log(bikes.map(bike => `${bike.category}: ${bike.price}: ${JSON.stringify(bike.size)}`))

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
            filterCategoryHandler,
            minPrice,
            setMinPrice,
            maxPrice,
            setMaxPrice,
            filteredSizes,
            filterSizeHandler
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
