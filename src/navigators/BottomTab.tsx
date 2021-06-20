import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, StyleSheet} from 'react-native';
import ContactsScreen from '../screens/ContactsScreen';
import WalletScreen from '../screens/WalletScreen';
import SettingsScreen from '../screens/SettingsScreen';
import IconBar from '../components/IconBar';
import HomeStack from './StackHome';

const BottomTabs = createBottomTabNavigator();

const Main = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          var icon: JSX.Element = <></>;
          var style = focused ? {tintColor: '#0070BA'} : {tintColor: 'black'};
          if (route.name === 'Home') {
            icon = (
              <Image
                key={1}
                source={require('./../../assets/home-alt1.png')}
                style={style}
              />
            );
          } else if (route.name === 'Contacts') {
            icon = (
              <Image
                key={2}
                source={require('./../../assets/users-alt1.png')}
                style={style}
              />
            );
          } else if (route.name === 'Wallet') {
            icon = (
              <Image
                key={3}
                source={require('./../../assets/wallet1.png')}
                style={style}
              />
            );
          } else if (route.name === 'Settings') {
            icon = (
              <Image
                key={4}
                source={require('./../../assets/setting1.png')}
                style={style}
              />
            );
          }

          // You can return any component that you like here!
          return (
            <IconBar focused={focused}>
              {[
                icon,
                <Text key={6} style={styles.textIconBar}>
                  {route.name}
                </Text>,
              ]}
            </IconBar>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          paddingHorizontal: 5,
          height: 70,
        },
      }}>
      <BottomTabs.Screen name="Home" component={HomeStack} />
      <BottomTabs.Screen name="Contacts" component={ContactsScreen} />
      <BottomTabs.Screen name="Wallet" component={WalletScreen} />
      <BottomTabs.Screen name="Settings" component={SettingsScreen} />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  textIconBar: {
    fontSize: 18,
    lineHeight: 32,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: '#0070BA',
    marginLeft: 6,
  },
});

export default Main;
