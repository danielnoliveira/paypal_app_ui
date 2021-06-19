import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ActivityItem() {
  return (
    <View style={styleItemActivity.itemActivity}>
      <View style={styleItemActivity.itemActivityHalfContainer}>
        <View style={styleItemActivity.itemActivityIcon}>
          <Text style={styleItemActivity.itemActivityIconText}>M</Text>
        </View>
        <View>
          <Text style={styleItemActivity.otherName}>Mike Rine</Text>
          <Text style={styleItemActivity.timeOccurency}>2 hours ago</Text>
        </View>
      </View>
      <Text
        style={[
          styleItemActivity.money,
          true ? styleItemActivity.green : styleItemActivity.red,
        ]}>
        +$250
      </Text>
    </View>
  );
}

const styleItemActivity = StyleSheet.create({
  itemActivity: {
    paddingHorizontal: 15,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemActivityHalfContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemActivityIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#F5F7FA',
    borderRadius: 50,
    marginRight: 16,
  },
  itemActivityIconText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '700',
  },
  otherName: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 22.75,
    color: '#243656',
  },
  timeOccurency: {
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 16,
    color: '#243656',
    opacity: 0.5,
  },
  money: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 32,
  },
  green: {
    color: '#37D39B',
  },
  red: {
    color: '#F47090',
  },
});
