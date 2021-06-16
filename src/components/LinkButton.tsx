import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface LinkButtonProps {
  content: string;
  cb: () => void;
}

export default function LinkButton({content, cb}: LinkButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={cb}
      style={styles.LinkButton}>
      <Text style={styles.textButton}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  LinkButton: {
    marginTop: 57.95,
  },
  textButton: {
    fontSize: 18,
    lineHeight: 22.93,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: '#243656',
    opacity: 0.5,
  },
});
