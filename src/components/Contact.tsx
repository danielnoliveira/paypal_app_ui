import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ContactProps {
  name: string;
  email: string;
}

export default function Contact({name, email}: ContactProps) {
  return (
    <View style={style.container}>
      <View style={style.icon}>
        <Text style={style.iconText}>{name.charAt(0)}</Text>
      </View>
      <View>
        <Text style={style.name}>{name}</Text>
        <Text style={style.email}>{email}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 32,
    height: 32,
    backgroundColor: '#F5F7FA',
    borderRadius: 50,
    marginRight: 16,
  },
  iconText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '700',
  },
  name: {
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 22.75,
    color: '#243656',
  },
  email: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 16,
    color: '#243656',
    opacity: 0.5,
  },
});
