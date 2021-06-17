import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IconBarProps {
  children: JSX.Element[];
  focused: boolean;
}

export default function IconBar({children, focused}: IconBarProps) {
  return (
    <View style={[styles.container, focused ? {} : {width: 32}]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomRightRadius: 41,
  },
});
