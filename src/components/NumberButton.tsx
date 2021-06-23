import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

interface NumberButtonProps {
  text?: string;
  icon?: any;
  fn: () => void;
}

export default function NumberButton({text, fn, icon}: NumberButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={fn}>
      {icon ? (
        <Image source={icon} />
      ) : (
        <Text style={styles.number}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 6,
  },
  number: {
    fontFamily: 'Roboto',
    fontSize: 24,
    lineHeight: 33,
    fontWeight: '600',
    color: 'black',
  },
});
