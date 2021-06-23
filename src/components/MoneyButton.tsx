import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface MoneyButtonProps {
  colored?: boolean;
  img: any;
  screen: string;
}

export default function MoneyButton({colored, img, screen}: MoneyButtonProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      activeOpacity={0.7}
      style={stylesButton.container}>
      <LinearGradient
        style={stylesButton.gradient}
        angle={135}
        angleCenter={{x: 0.5, y: 0.5}}
        useAngle={true}
        colors={
          colored ? ['#0060BA', '#0000a5', '#0000a5'] : ['white', 'white']
        }>
        <Image source={img} />
        <Text
          style={[
            stylesButton.text,
            colored ? {color: 'white'} : {color: '#005EA6'},
          ]}>
          Send Money
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const stylesButton = StyleSheet.create({
  container: {
    backgroundColor: '#0000a5',
    width: 107,
    height: 120,
    overflow: 'hidden',
    borderRadius: 20,
  },
  gradient: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 20,
  },
  text: {
    width: 45,
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 16.5,
    fontWeight: '600',
    color: 'white',
  },
});
