import React, {useState} from 'react';
import {View, StatusBar, Image, StyleSheet, Dimensions} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Contact from '../components/Contact';
import HeaderBarScreen from '../components/HeaderBarScreen';

const {width} = Dimensions.get('window');

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

import contactMocks from './../mock_data/contacts';

export default function ContactsScreen() {
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
