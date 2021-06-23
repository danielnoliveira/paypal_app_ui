import React, {useReducer, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Contact from '../components/Contact';
import HeaderBarScreen from '../components/HeaderBarScreen';
import NumberButton from '../components/NumberButton';

const {width} = Dimensions.get('window');

interface Action {
  value?: string;
  type: string;
}

const reducer = (state: string, action: Action) => {
  switch (action.type) {
    case 'increment':
      return `${state}${action.value}`;
    case 'decrement':
      return state.slice(0, state.length - 1);
    case 'sendMoney':
      return '';
    default:
      throw new Error('Ação não encontrada!!!!');
  }
};

interface Contact {
  name: string;
  email: string;
  id: number;
}
import contacts from './../mock_data/contacts';

export default function SendMoneyScreen() {
  const [value, dispatch] = useReducer(reducer, '');
  const [contact, setContact] = useState('');
  const [open, setOpen] = useState(false);
  const [destino, setDestino] = useState<Contact | null>(null);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <HeaderBarScreen screenName="Send Money" tint="black" />
      <View style={{marginTop: 15}}>
        {destino === null ? (
          <TextInput
            autoCapitalize="none"
            style={styles.inputSearchContact}
            value={contact}
            placeholder="E-mail or name of contact to send"
            onChangeText={text => {
              if (!open) {
                setOpen(!open);
              }
              setContact(text);
            }}
          />
        ) : (
          <Contact email={destino.email} name={destino.name} />
        )}
        <ScrollView
          style={[
            styles.svFloat,
            contact === '' || !open ? {display: 'none'} : {},
          ]}>
          {contacts
            .filter(
              c =>
                c.email.toLowerCase().includes(contact) ||
                c.name.toLowerCase().includes(contact),
            )
            .map(c => {
              return (
                <TouchableOpacity
                  key={c.id}
                  onPress={() => {
                    setDestino({...c});
                    setOpen(!open);
                  }}
                  activeOpacity={0.8}>
                  <Contact name={c.name} email={c.email} key={c.id} />
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
      <Text style={styles.value}>$ {value}</Text>
      <View style={styles.keyboard}>
        {Array(9)
          .fill(0)
          .map((d, index) => {
            return (
              <NumberButton
                key={index}
                fn={() => dispatch({value: `${index + 1}`, type: 'increment'})}
                text={`${index + 1}`}
              />
            );
          })}
        <NumberButton
          fn={() => dispatch({type: 'increment', value: '0'})}
          text="0"
        />
        <NumberButton
          fn={() => dispatch({type: 'increment', value: '.'})}
          text="."
        />
        <NumberButton
          fn={() => dispatch({type: 'decrement'})}
          icon={require('./../../assets/Vector.png')}
        />
      </View>
      <TouchableOpacity
        style={styles.sendMoneyButton}
        activeOpacity={0.8}
        onPress={() => {
          console.log('Dinheiro enviado');
          dispatch({type: 'sendMoney'});
        }}>
        <LinearGradient
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          angle={45}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['#1546A0', '#0000a5']}>
          <Text style={styles.sendMoneyButtonText}>Send</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.08533333333,
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  value: {
    fontFamily: 'Roboto',
    fontSize: 40,
    lineHeight: 55,
    fontWeight: '600',
    color: '#243656',
    marginBottom: 30,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#0070BA',
    borderRadius: 20,
    paddingLeft: 20,
    paddingVertical: 7,
  },
  sendMoneyButton: {
    height: 64,
    marginTop: 37,
    borderRadius: 20,
    overflow: 'hidden',
  },
  sendMoneyButtonText: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: 'white',
    textAlign: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSearchContact: {
    fontSize: 20,
    lineHeight: 64,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  svFloat: {
    maxHeight: 178,
  },
});
