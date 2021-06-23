import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/logoWhite.png')}
        style={styles.logoTransparent}
      />
      <View style={styles.headerContent}>
        <View style={styles.headerContentFirstRow}>
          <Image source={require('./../../assets/logo.png')} />
          <Image
            style={{borderRadius: 20}}
            source={require('./../../assets/avatar.png')}
          />
        </View>
        <View style={styles.headerContentSecondRow}>
          <Text style={styles.gretings}>Hello, Valdim!</Text>
        </View>
        <View style={styles.headerContentThirdtRow}>
          <Text style={styles.money}>$ 252.30</Text>
          <Text style={styles.moneyText}>Your balance</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 0.33497536945 * height,
    width: '100%',
    backgroundColor: '#0000a5',
    overflow: 'hidden',
    borderBottomRightRadius: 41,
    marginBottom: 24,
  },
  gradient: {
    flex: 1,
  },
  logoTransparent: {
    zIndex: 3,
    opacity: 0.2,
  },
  headerContent: {
    position: 'absolute',
    zIndex: 4,
    width: width * 0.82577777776,
    height: height * 0.28630541871,
    left: width * 0.085,
    top: 40,
  },
  headerContentFirstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContentSecondRow: {
    marginTop: 12,
    marginBottom: 32,
  },
  gretings: {
    fontSize: 18,
    lineHeight: 24,
    color: 'white',
    opacity: 0.6,
  },
  headerContentThirdtRow: {},
  money: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 55,
    color: 'white',
  },
  moneyText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 22,
    color: 'white',
  },
});
