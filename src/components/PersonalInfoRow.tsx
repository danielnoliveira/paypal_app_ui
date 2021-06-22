import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface PersonalInfoRowProps {
  label: string;
  value: string;
}

export default function PersonalInfoRow({label, value}: PersonalInfoRowProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  label: {
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 22,
    color: '#243656',
    marginRight: 37,
  },
  value: {
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
    color: '#243656',
  },
});
