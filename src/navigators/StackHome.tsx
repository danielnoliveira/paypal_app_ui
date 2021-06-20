import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ActivityScreen from '../screens/ActivityScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" headerMode="none">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Activity" component={ActivityScreen} />
  </Stack.Navigator>
);

export default HomeStack;
