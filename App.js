import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/styles/pages/Login';
import Home from './src/styles/pages/Home';
import Cadastro from './src/styles/pages/cadastro';
//import styleHome from './src/styles/pages/style_Home'

//import styles from './src/styles/pages/style_Login'; // os estilos sao importados
//import { render } from 'react-dom';


const Stack = createStackNavigator();

export default function App() {
  
    return (
      
    


        <NavigationContainer>
          <Stack.Navigator initialRouteName = "Login">

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cadastro" component={Cadastro} />


          </Stack.Navigator>
        </NavigationContainer >

    
    );

  
}
