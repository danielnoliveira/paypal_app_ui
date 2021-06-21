import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ActivitiesContainerProps {
  children: JSX.Element[];
  title: string;
}

export default function ActiviesContainer({
  children,
  title,
}: ActivitiesContainerProps) {
  return (
    <View style={styleActivesContainer.container}>
      <Text style={styleActivesContainer.containerHeaderText}>{title}</Text>
      {children}
    </View>
  );
}

const styleActivesContainer = StyleSheet.create({
  container: {},
  containerHeaderText: {
    marginVertical: 18,
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 22.45,
    color: '#243656',
    fontWeight: '700',
    opacity: 0.5,
  },
});
