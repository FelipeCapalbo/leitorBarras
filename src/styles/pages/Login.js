import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './style_Login'; // os estilos sao importados
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';



export default function Login({ navigation }) {

  return (
    <View style={styles.container}>
      <Image source={require('../components/utilitarios/EAR-image.png')}
        style={styles.logo}
      />
      <Text style={styles.slogan}>Code1 consultoria e soluçoes</Text>

      <Text style={styles.textocad}>acesse com o seu cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu login"
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true} //para a senha ficar formatada
        placeholder="Digite sua senha"
      />

      <TouchableOpacity
        style={styles.botao1}
        onPress={() =>  navigation.navigate(Home) }>
        <Text style={styles.botaotxt}>Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>
  )



}
//xport default login;

