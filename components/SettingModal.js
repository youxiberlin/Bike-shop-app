import React from 'react';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
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
            <SortPrice
              {...{
                sortPriceOrder,
                setSortPriceOrder
              }}
            />
            <CategoryFilter
              {...{
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
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
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
  },
  centeredView: {
    flex: 1,
    marginTop: 50
  },
  modalView: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 15,
  },
  closeButton: {
  },
  textStyle: {
    textAlign: "center"
  },
});
