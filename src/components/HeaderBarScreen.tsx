import {NavigationProp} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface HeaderBarScreenProps {
  navigation: NavigationProp<any>;
  screenName: string;
  iconTwo?: any;
  fnTwo?: () => void;
  tint?: string;
}

export default function HeaderBarScreen({
  navigation,
  screenName,
  iconTwo,
  fnTwo,
  tint,
}: HeaderBarScreenProps) {
  return (
    <View style={stylesHeader.header}>
      <TouchableOpacity
        style={stylesHeader.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          style={tint ? {tintColor: tint} : {}}
          source={require('./../../assets/arrow-left.png')}
        />
      </TouchableOpacity>
      <Text style={[stylesHeader.title, tint ? {color: tint} : {}]}>
        {screenName}
      </Text>
      {iconTwo === undefined ? (
        <View style={{width: 32, height: 32}} />
      ) : (
        <TouchableOpacity onPress={fnTwo}>
          <Image source={iconTwo} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const stylesHeader = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 46,
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 4,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 22,
    lineHeight: 32,
    color: '#243656',
  },
  backButton: {height: 32, justifyContent: 'center'},
});
