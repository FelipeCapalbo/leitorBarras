import { StyleSheet } from 'react-native';

const styleHome = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        botao: {
            width: 200,
            height: 42,
            backgroundColor: '#3498db',
            marginTop: 20,
            borderRadius: 4,
            alignItems: 'center',  //centralizar
            justifyContent: 'center',  //centralizar
        },
        botaotxt: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#fff',
        },



        
    },



});
export default styleHome;