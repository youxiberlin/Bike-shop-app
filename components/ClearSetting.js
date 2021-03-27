import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default function ClearSetting({ clearSettingHandler }) {
  return (
    <View style={styles.container}>
       <Button
          title={'Clear All Settings'}
          onPress={() => clearSettingHandler()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center'
  }
});
