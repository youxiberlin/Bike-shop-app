import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SortPrice from '../components/SortPrice';

export default function SettingScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <SortPrice
        {...{route, navigation}}
      />
    </View>
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
