import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MoneyButton from './MoneyButton';

export default function MoneyOptions() {
  return (
    <View style={styles.container}>
      <MoneyButton
        screen="SendMoney"
        colored
        img={require('./../../assets/upload-alt1.png')}
      />
      <MoneyButton
        screen="SendMoney"
        img={require('./../../assets/upload-alt3.png')}
      />
      <TouchableOpacity style={styles.optionsButton}>
        <Image
          style={{width: 32, height: 32}}
          source={require('./../../assets/ellipsis-h1.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionsButton: {
    width: 66,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
