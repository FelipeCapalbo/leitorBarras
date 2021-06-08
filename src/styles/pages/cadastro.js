import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './style_Login'; // os estilos sao importados


export default function Cadastro ({ navigation }) {

    return (
        <View style={styles.container}>


            <TextInput
                style={styles.input}
                placeholder="digite o codigo de barras do objeto"
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true} //para a senha ficar formatada
                placeholder="digite a descrição do objeto"
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true} //para a senha ficar formatada
                placeholder="Digite sua categoria do objeto"
            />

            <TouchableOpacity
                style={styles.botao1}>
                
                <Text style={styles.botaotxt}>Codigo de Barras</Text>
                
            </TouchableOpacity>


        </View>



    )



}
