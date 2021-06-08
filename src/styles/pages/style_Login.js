//import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  slogan: {
    //color:'#fffafa',
    lineHeight: 40,   // espaçamento vertical
    color: '#d3d3d3',
    fontSize: 16
  },
  textocad: {
    color: '#fffafa',
    lineHeight: 20
    //color : '##d3d3d3'
  },
  input: {
    marginTop: 10,
    padding: 10, //espaçamento
    width: 300,
    height: 32,
    backgroundColor: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 3
    // color : '#d3d3d3',
  },
  botao1: {
    width: 200,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 20,
    borderRadius: 4,
    alignItems: 'center',  //centralizar
    justifyContent: 'center'  //centralizar
  },
  botaotxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },

});

export default styles;