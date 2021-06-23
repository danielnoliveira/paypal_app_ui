import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import moment from 'moment';
import ActivityItem from '../components/ActivityItem';

const {width} = Dimensions.get('window');

var days = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sabado',
];

import activitys from './../mock_data/data';
import ActiviesContainer from '../components/ActiviesContainer';
import ButtonsContainer from '../components/ButtonsContainer';
import {StatusBar} from 'react-native';
import HeaderBarScreen from '../components/HeaderBarScreen';

export default function ActivityScreen() {
  const [buttonSelected, setbuttonSelected] = useState('All');
  const [items, setItems] = useState(activitys);

  const buttonPressed = (b: string) => {
    setbuttonSelected(b);
    changeItems(b);
  };
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
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <HeaderBarScreen
        screenName="Activity"
        fnTwo={() => console.log('Second button Activity screen')}
        iconTwo={require('./../../assets/search.png')}
      />
      <ButtonsContainer
        buttonPressed={buttonPressed}
        buttonSelected={buttonSelected}
      />
      <ScrollView>
        {Object.entries<any>(
          items.reduce<any>(
            (acc, next) => {
              const date = moment(next.timeOperation, 'DD/MM/YYYY');
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
            <ActiviesContainer title={b[0]} key={index}>
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
            </ActiviesContainer>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.066666666,
    backgroundColor: 'white',
  },
});
