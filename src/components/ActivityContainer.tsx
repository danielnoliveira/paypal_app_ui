import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ActivityItem from './ActivityItem';

interface ActivityContainerProps {
  goActivityScreen: () => void;
}

import activitys from './../mock_data/data';

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
      <ActivityItem data={activitys[0]} />
      <ActivityItem data={activitys[1]} />
      <ActivityItem data={activitys[2]} />
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
    fontSize: 18,
    lineHeight: 22,
    color: '#243656',
    opacity: 0.7,
  },
});
