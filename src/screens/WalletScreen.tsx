import React from 'react';
import {StatusBar} from 'react-native';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../components/Card';
import HeaderBarScreen from '../components/HeaderBarScreen';
import PersonalInfoRow from '../components/PersonalInfoRow';

const {width, height} = Dimensions.get('window');

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <View style={stylesHeader.container}>
        <Image
          source={require('./../../assets/logoWhite.png')}
          style={stylesHeader.logoTransparent}
        />
        <HeaderBarScreen
          tint="white"
          screenName="Your wallet"
          iconTwo={require('./../../assets/edit1.png')}
          fnTwo={() => console.log('Edit button pressed')}
        />
      </View>
      <Image
        source={require('./../../assets/BigAvatar.png')}
        style={styles.avatar}
      />
      <View style={styles.secondContainer}>
        <Text style={styles.secondContainerText}>Personal Info</Text>
        <PersonalInfoRow label="Name" value="Vadim Demenko" />
        <PersonalInfoRow label="E-mail" value="vadikforz@gmail.com" />
        <PersonalInfoRow label="Phone" value="+4 1782 049 294" />
      </View>
      <View style={[styles.secondContainer, {marginTop: 25}]}>
        <View style={styles.bankingCardsHeader}>
          <Text style={styles.secondContainerText}>My banking cards</Text>
          <TouchableOpacity style={styles.addCardButton}>
            <Text style={styles.addCardButtonText}>+ Add</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Card
            name="Visa"
            numbers="4132 1234 6292 4746"
            image={require('./../../assets/visa.png')}
          />
          <Card
            name="Mastercard"
            numbers="4132 1234 6293 5236"
            image={require('./../../assets/mastercard.png')}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const stylesHeader = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.066666666,
    height: 0.23645320197 * height,
    width: '100%',
    backgroundColor: '#0000a5',
    overflow: 'hidden',
  },
  logoTransparent: {
    zIndex: 3,
    opacity: 0.3,
    position: 'absolute',
    left: -135,
    top: 0,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avatar: {
    width: 147,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    top: -71.5,
    marginHorizontal: (width - 147) / 2,
  },
  secondContainer: {
    marginHorizontal: width * 0.08533333333,
    marginTop: -12,
  },
  secondContainerText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 18,
    opacity: 0.7,
    color: '#243656',
    marginBottom: 3,
  },
  bankingCardsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addCardButton: {
    flexDirection: 'row',
  },
  addCardButtonText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 16,
    opacity: 0.7,
    color: '#243656',
  },
});
