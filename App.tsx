/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.LogoPayPal}>
        <Image
          source={require('./assets/logo-mini.png')}
          style={{marginRight: 16.95}}
        />
        <Image source={require('./assets/logo-large.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LogoPayPal: {
    flexDirection: 'row',
    marginTop: height * 0.16133004926,
    marginHorizontal: width * 0,
    alignItems: 'baseline',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
