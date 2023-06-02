import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 export default class App extends React.Component{
    render(){
        return(
            <View style = {StyleSheet.container}>
                <Text>Hello Git!</Text>
                <StatusBar style = "auto"/> 
                </View>
        );
    }
}
      const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
  }
)
//backgroundColor= Cor de fundo!
//alignItems= Alinhar os itens!
//JustifyContent= Alinhar os itens
// <View> </View>= Sempre utiliza ao final o </View> Exemplo!
// <View Sytle....> <Text> OLá </Text> </View> Obs; Sempre Re-Ler 
// Para não esquecer a letra se estáa maiuscula ou minuscula, Tem que está igual ao Import!
// return= utilizar sempre depois do rende é antes do view ´w exemplos como header, body, footer usar logo abaixo!
 // render= tudo vai sair no app!

