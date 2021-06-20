import {NavigationProp} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import ActivityItem from '../components/ActivityItem';

const {width} = Dimensions.get('window');

interface ActivityProps {
  navigation: NavigationProp<any>;
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
var days = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sabado',
];

import activitys from './../data';

export default function ActivityScreen({navigation}: ActivityProps) {
  const [buttonSelected, setbuttonSelected] = useState('All');
  const [items, setItems] = useState(activitys);

  const changeItems = (buttonName: string) => {
    if (buttonName === 'All') {
      setItems([...activitys]);
    } else if (buttonName === 'Outcome') {
      const nitems = activitys.filter(l => l.type === 'credit');
      setItems([...nitems]);
    } else {
      const nitems = activitys.filter(l => l.type === 'debit');
      setItems([...nitems]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={stylesHeader.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('./../../assets/arrow-left.png')} />
        </TouchableOpacity>
        <Text style={stylesHeader.title}>Activity</Text>
        <TouchableOpacity>
          <Image source={require('./../../assets/search.png')} />
        </TouchableOpacity>
      </View>
      <View style={stylesButtons.container}>
        {buttons.map((b, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setbuttonSelected(b);
                changeItems(b);
              }}
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
      <ScrollView>
        {Object.entries<any>(
          items.reduce<any>(
            (acc, next) => {
              const date = moment(next.timeOperation, 'DD/MM/YYYY');
              console.log(date);
              const today = new Date();
              if (
                date.day() === today.getDay() &&
                date.month() === today.getMonth() &&
                date.year() === today.getFullYear()
              ) {
                acc.Today.push(next);
              } else if (
                date.day() - 1 === today.getDay() &&
                date.month() === today.getMonth() &&
                date.year() === today.getFullYear()
              ) {
                acc.Yesterday.push(next);
              } else {
                const key = `${days[date.day()]},${
                  date.month() + 1
                },${date.year()}`;
                if (acc[key]) {
                  acc[key].push(next);
                } else {
                  acc[key] = [next];
                }
              }
              return acc;
            },
            {Today: [], Yesterday: []},
          ),
        ).map((b, index) => {
          if (b[1].length === 0) {
            return;
          }
          return (
            <View style={styleActivesContainer.container} key={index}>
              <Text style={styleActivesContainer.containerHeaderText}>
                {b[0]}
              </Text>
              {b[1].map(
                (
                  item: {
                    name: string;
                    timeOperation: string;
                    value: number;
                    type: string;
                  },
                  ind: React.Key | null | undefined,
                ) => (
                  <ActivityItem key={ind} data={item} />
                ),
              )}
            </View>
          );
        })}
      </ScrollView>
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

const stylesButtons = StyleSheet.create({
  container: {
    backgroundColor: '#F5F7FA',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginTop: 30,
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

const stylesHeader = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 46,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 22,
    lineHeight: 32,
    color: '#243656',
    fontWeight: '700',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.066666666,
    backgroundColor: 'white',
  },
});
