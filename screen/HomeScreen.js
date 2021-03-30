import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, FlatList } from 'react-native';
import { compose, filter, sort } from 'ramda'
import { byCategory, byPriceRange, byPriceOrder, applySizeFilter, } from '../lib/utils';
import SettingModal from '../components/SettingModal';
import CurrentSetting from '../components/CurrentSetting';
import bikeData from '../data/bike-data';
import BikeCard from '../components/BikeCard';
import fb from '../firebase';

function getBikes() {
  const [bikes, setBikes] = useState([])
  useEffect(() => {
    fb
      .firestore()
      .collection('bikes')
      .onSnapshot(snapshot => {
        const newBikes = snapshot.docs.map((doc) => {
          const item = {
            id: doc.id,
            ...doc.data()
          }
          return item;
        })
        setBikes(newBikes)
      })
  }, [])
  return bikes
}

export default function HomeScreen({ navigation }) {
  const dbBikes = getBikes();

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
  const [minMaxPrices, setMinMaxPrices] = useState([]);
  const [filteredSizes, setFilterSizes] = useState([]);

  const clearSettingHandler = () => {
    setSortPriceOrder(null);
    setFilteredCategories([]);
    setMinMaxPrices([]);
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
    filter(byPriceRange(...minMaxPrices)),
    sort(byPriceOrder(sortPriceOrder)),
    applySizeFilter(filteredSizes)
  )(dbBikes);

  
  const renderItem = ({ item }) => (
    <BikeCard
      name={item.name}
      price={item.price}
      images={item.images}
      category={item.category}
      size={item.size}
      navigation={navigation}
    />
  );

  return (
      <SafeAreaView>
        <SettingModal
          {...{
            modalVisible,
            setModalVisible,
            sortPriceOrder,
            setSortPriceOrder,
            filteredCategories,
            filterCategoryHandler,
            filteredSizes,
            filterSizeHandler,
            clearSettingHandler,
            minMaxPrices,
            setMinMaxPrices
          }}
        />
        <CurrentSetting
          {...{
            sortPriceOrder,
            filteredCategories,
            filteredSizes,
            minMaxPrices,
          }}
        />
        <FlatList
          data={bikes}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </SafeAreaView>
  );
}
