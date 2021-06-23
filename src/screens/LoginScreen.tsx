/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import LinkButton from './../components/LinkButton';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <View style={styles.LogoPayPal}>
        <Image
          source={require('./../../assets/logo-mini.png')}
          style={{marginRight: 16.95}}
        />
        <Image source={require('./../../assets/logo-large.png')} />
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={user}
          onChangeText={text => setUser(text)}
          placeholder="Enter your name or email"
        />
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          placeholder="Passowrd"
        />
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Main')}>
          <LinearGradient
            style={styles.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            angle={90}
            angleCenter={{x: 0.5, y: 0.5}}
            colors={['#0070BA', '#1546A0']}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <LinkButton
        content="Having trouble logging in?"
        cb={() => console.log('Login problems')}
      />
      <LinkButton content="Sign up" cb={() => console.log('Sign up')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  LogoPayPal: {
    flexDirection: 'row',
    marginTop: height * 0.16133004926,
    marginBottom: height * 0.12133004926,
    marginHorizontal: width * 0,
    alignItems: 'baseline',
  },
  input: {
    width: width * 0.696,
    height: 56,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 22.93,
    fontWeight: '600',
    fontFamily: 'Roboto',
    borderRadius: 20,
    marginBottom: 16,
  },
  loginButton: {
    width: width * 0.696,
    height: 64,
    marginTop: 37,
  },
  loginButtonText: {
    fontSize: 20,
    lineHeight: 64,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: 'white',
    textAlign: 'center',
  },
  gradient: {
    flex: 1,
  },
});

export default LoginScreen;
