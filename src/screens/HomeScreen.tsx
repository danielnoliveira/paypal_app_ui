import {NavigationProp} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import ActivityContainer from '../components/ActivityContainer';
import HeaderHome from '../components/HeaderHome';
import MoneyOptions from '../components/MoneyOptions';

interface HomeProps {
  navigation: NavigationProp<any>;
}

const {width} = Dimensions.get('window');

export default function HomeScreen({navigation}: HomeProps) {
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <HeaderHome />
      <View style={styles.secondContainer}>
        <MoneyOptions />
        <ActivityContainer
          goActivityScreen={() => navigation.navigate('Activity')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondContainer: {
    marginHorizontal: width * 0.08533333333,
  },
});
