import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ActivityItem from './ActivityItem';

interface ActivityContainerProps {
  goActivityScreen: () => void;
}

export default function ActivityContainer({
  goActivityScreen,
}: ActivityContainerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity</Text>
        <TouchableOpacity
          style={styles.buttonActivity}
          onPress={goActivityScreen}>
          <Text style={styles.buttonActivityText}>View all</Text>
        </TouchableOpacity>
      </View>
      <ActivityItem />
      <ActivityItem />
      <ActivityItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  headerTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600',
    color: '#243656',
  },
  buttonActivity: {},
  buttonActivityText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 20,
    color: '#243656',
    opacity: 0.5,
  },
});
