import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ButtonsContainerProps {
  buttonPressed: (b: string) => void;
  buttonSelected: string;
}
const buttons = ['All', 'Income', 'Outcome'];
const buttonActive = {
  backgroundColor: '#005EA6',
};
const buttonDesactive = {
  backgroundColor: '#F5F7FA',
};
const textActive = {
  color: 'white',
};
const textDesactive = {
  color: '#243656',
  opacity: 0.6,
};

export default function ButtonsContainer({
  buttonPressed,
  buttonSelected,
}: ButtonsContainerProps) {
  return (
    <View style={stylesButtons.container}>
      {buttons.map((b, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => buttonPressed(b)}
            style={[
              stylesButtons.button,
              buttonSelected === b ? buttonActive : buttonDesactive,
            ]}>
            <Text
              style={[
                stylesButtons.buttonText,
                b === buttonSelected ? textActive : textDesactive,
              ]}>
              {b}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const stylesButtons = StyleSheet.create({
  container: {
    backgroundColor: '#F5F7FA',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginVertical: 30,
    marginHorizontal: 32,
  },
  button: {
    backgroundColor: '#005EA6',
    paddingHorizontal: 24,
    paddingVertical: 11,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'Roboto',
  },
});
