import React from 'react';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import SortPrice from './SortPrice';
import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';
import SizeFilter from './SizeFilter';
import ClearSetting from './ClearSetting';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SettingModal({
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
   }) {
  const closeIcon = <Icon name="times-circle" size={30} color="#333" />;
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
                minMaxPrices,
                setMinMaxPrices
              }}
            />
            <SizeFilter
              {...{
                filteredSizes,
                filterSizeHandler
              }}
            />
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <View>
              {closeIcon}
              </View>
              <View>
                <Text style={styles.textStyle}>
                  Close
                </Text>
              </View>
            </Pressable>
            <ClearSetting
              {...{clearSettingHandler}}
            />
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
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20
  },
  textStyle: {
    textAlign: "center"
  },
});
