import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, StatusBar, Image, StyleSheet, Dimensions} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Contact from '../components/Contact';
import HeaderBarScreen from '../components/HeaderBarScreen';

interface ContactsScreenProps {
  navigation: NavigationProp<any>;
}

const {width} = Dimensions.get('window');

const contactMocks = [
  {
    id: 1,
    name: 'Dido Reddell',
    email: 'dreddell0@symantec.com',
  },
  {
    id: 2,
    name: 'Sheffield Wanka',
    email: 'swanka1@unesco.org',
  },
  {
    id: 3,
    name: 'Marijn Booij',
    email: 'mbooij2@shinystat.com',
  },
  {
    id: 4,
    name: 'Art Marnane',
    email: 'amarnane3@bandcamp.com',
  },
  {
    id: 5,
    name: 'Noemi McCrostie',
    email: 'nmccrostie4@nba.com',
  },
  {
    id: 6,
    name: 'Marielle Miller',
    email: 'mmiller5@123-reg.co.uk',
  },
  {
    id: 7,
    name: 'Thorn Livings',
    email: 'tlivings6@fema.gov',
  },
  {
    id: 8,
    name: 'Langsdon Munday',
    email: 'lmunday7@addthis.com',
  },
  {
    id: 9,
    name: 'Vannie Marrows',
    email: 'vmarrows8@simplemachines.org',
  },
  {
    id: 10,
    name: 'Margery Hogben',
    email: 'mhogben9@domainmarket.com',
  },
  {
    id: 11,
    name: 'Torrance Chong',
    email: 'tchonga@examiner.com',
  },
  {
    id: 12,
    name: 'Matty Earengey',
    email: 'mearengeyb@loc.gov',
  },
  {
    id: 13,
    name: 'Tynan Quemby',
    email: 'tquembyc@a8.net',
  },
  {
    id: 14,
    name: 'Osborn Skipper',
    email: 'oskipperd@prlog.org',
  },
  {
    id: 15,
    name: "Agustin O'Lehane",
    email: 'aolehanee@miibeian.gov.cn',
  },
  {
    id: 16,
    name: 'Manon Matzeitis',
    email: 'mmatzeitisf@seesaa.net',
  },
  {
    id: 17,
    name: 'Jennifer Wight',
    email: 'jwightg@github.com',
  },
  {
    id: 18,
    name: 'Jedediah Hartly',
    email: 'jhartlyh@desdev.cn',
  },
  {
    id: 19,
    name: 'Orel Gatteridge',
    email: 'ogatteridgei@shop-pro.jp',
  },
  {
    id: 20,
    name: 'Von Newbatt',
    email: 'vnewbattj@webeden.co.uk',
  },
  {
    id: 21,
    name: 'Mareah Charlet',
    email: 'mcharletk@blogtalkradio.com',
  },
  {
    id: 22,
    name: 'Jimmie Kisbee',
    email: 'jkisbeel@mashable.com',
  },
  {
    id: 23,
    name: 'Hamish Cowins',
    email: 'hcowinsm@yahoo.com',
  },
  {
    id: 24,
    name: 'Dewie Phibb',
    email: 'dphibbn@opensource.org',
  },
  {
    id: 25,
    name: 'Siusan Widdup',
    email: 'swiddupo@examiner.com',
  },
];

interface Contact {
  id: number;
  name: string;
  email: string;
}

const sortComparator = (a: Contact, b: Contact) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
};

export default function ContactsScreen({navigation}: ContactsScreenProps) {
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState(contactMocks);
  const filterContacts = (text: string) => {
    const newContacts = contactMocks.filter(
      c => c.name.includes(text) || c.email.includes(text),
    );
    setContacts([...newContacts]);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <HeaderBarScreen
        navigation={navigation}
        screenName="Contacts"
        fnTwo={() => console.log('Button add contact clicked!!!')}
        iconTwo={require('./../../assets/plus.png')}
      />
      <View style={styles.inputContainer}>
        <Image
          source={require('./../../assets/search.png')}
          style={styles.inputContainerIcon}
        />
        <TextInput
          style={styles.inputContainerField}
          value={search}
          onChangeText={text => {
            setSearch(text);
            filterContacts(text);
          }}
          placeholder="Enter a name or e-mail"
        />
      </View>
      <ScrollView>
        {contacts.sort(sortComparator).map(contact => {
          return (
            <Contact
              name={contact.name}
              email={contact.email}
              key={contact.id}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.066666666,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  inputContainerIcon: {
    marginRight: 12,
  },
  inputContainerField: {
    fontSize: 18,
    lineHeight: 22,
    color: '#243656',
  },
});
