import { Button, StyleSheet, Text, View, TextInput, Alert} from 'react-native'
import React, { useState } from 'react'

//IMportasion Fire
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import{auth}from '../config/Config'


export default function LoginScreen({ navigation }: any) {

  const [correo, setCorreo] = useState('')
  const [contrasenia, setContrasenia] = useState('')

  function login() {
    signInWithEmailAndPassword(auth, correo,contrasenia)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigation.navigate('Drawer')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      let titulo=""
      let mensaje=""

      
      if(errorCode == "auth/wrong-password"){
        titulo='ERROR de Contraseña'
        mensaje ="COntraseña incorrecta, revisar credenciales"
      }else if (errorCode == "auth/user-not-found"){
          titulo='ERROR de Usuario'
        mensaje ="Usuario no encontrado , revisar correo electronico"
      }else{
             titulo='ERROR de Acceso'
        mensaje ="Revisar credenciales de correo y contraseña"
      }
      
      Alert.alert(titulo,mensaje)///podemos llamar con mensage o las funciones
    });
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Login</Text>

      <TextInput
        placeholder='Ingresa tu correo electrónico'
        onChangeText={(texto) => (setCorreo(texto))}
        keyboardType='email-address'
      />
      <TextInput
        placeholder='Ingresa contraseña'
        onChangeText={(texto) => (setContrasenia(texto))}
      />

      <Button title='Ingresar' onPress={() => login()} />

      <Text onPress={() => navigation.navigate('Registro')}> 👉 Regístrate aquí 👈</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})