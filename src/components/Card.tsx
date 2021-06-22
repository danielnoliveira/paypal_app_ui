import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface CardProps {
  image: any;
  name: string;
  numbers: string;
}

function hideSomeDigits(numbers: string): string {
  const regex = /(\d{3} \d{4} \d{3})/;
  let cryptoNumbers = numbers.replace(regex, '*** **** ***');
  return cryptoNumbers;
}

export default function Card({image, name, numbers}: CardProps) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.cardLogo} />
      <View>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardNumbers}>{hideSomeDigits(numbers)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLogo: {
    marginRight: 16,
  },
  cardName: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 22,
    color: '#243656',
  },
  cardNumbers: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 16,
    opacity: 0.7,
    color: '#243656',
  },
});
