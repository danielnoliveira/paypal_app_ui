import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <Text>Wallet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
