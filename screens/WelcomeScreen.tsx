import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../config/Config';
import LoginScreen from './LoginScreen';

export default function WelcomeScreen({navigation}:any) {

  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title='Atras' onPress={() => navigation.navigate('Login')} />
    </View>
    
  )
}


const styles = StyleSheet.create({})