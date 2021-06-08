import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style_Login';
import Cadastro from './cadastro';

export default function Home ({ navigation }) {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.botao1}
                    onPress={() => { this.props.navigation.navigate() }}>
                    <Text style={styles.botaotxt}>Pesquisar Objetos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botao1}
                    onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.botaotxt}>Adicionar objeto</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botao1}
                    onPress={() => { this.props.navigation.navigate("Cadastro") }}>
                    <Text style={styles.botaotxt}>Mover Objetos</Text>
                </TouchableOpacity>

                <StatusBar style="auto" />

            </View>
        )
    
}

