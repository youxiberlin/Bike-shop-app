import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, Modal, Pressable } from 'react-native'
import SortPrice from './SortPrice';
import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';
import SizeFilter from './SizeFilter';
import ClearSetting from './ClearSetting';

export default function SettingModal({
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
    filterSizeHandler,
    clearSettingHandler
   }) {
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <SortPrice
              {...{
                sortPriceOrder,
                setSortPriceOrder
              }}
            />
            <CategoryFilter
              {...{
                bikeCategories,
                filteredCategories,
                filterCategoryHandler
              }}
            />
            <PriceRangeFilter
              {...{
                minPrice,
                setMinPrice,
                maxPrice,
                setMaxPrice
              }}
            />
            <SizeFilter
              {...{
                filteredSizes,
                filterSizeHandler
              }}
            />
            <ClearSetting
              {...{clearSettingHandler}}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    marginTop: 50
  },
  modalView: {
    margin: 0,
    backgroundColor: "rgba(192,192,192,0.8)",
    padding: 35,
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
