import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

 export default class App extends React.Component{
    
    Header = () =>{
        return(
            <Text> Hello! </Text>
        );
    }
    
    Body = () =>{
        return(
        <Text> World! </Text>
        );
    }
    Footer = () =>{
        return(
        <Text> My World! </Text>
        );
    }

    render(){
        return(
            <View style = {{marginTop:20}}>
               <this.Button></this.Button>
               <this.Header></this.Header>
               <this.Body></this.Body>
               <this.Footer></this.Footer>
                <Text>Hello Git!</Text>
               <Image style={{width:50,height:100}} 
               source= {{uri:'Link da image'}}
               />
                </View>
        );
    }
}
         


const Button = () =>{
        return(
            <Button title="Click"></Button>
        )    
        }
  

//backgroundColor= Cor de fundo!
//alignItems= Alinhar os itens!
//JustifyContent= Alinhar os itens
// <View> </View>= Sempre utiliza ao final o </View> Exemplo!
// <View Sytle....> <Text> OLá </Text> </View> Obs; Sempre Re-Ler 
// Para não esquecer a letra se estáa maiuscula ou minuscula, Tem que está igual ao Import!
// return= utilizar sempre depois do rende é antes do view ´w exemplos como header, body, footer usar logo abaixo!
// render= tudo vai sair no app!
// Image= Modificar o estilo, Tal como tamhanho é espessura!Usar style!
// Source= utilizar para adicionar link com o uri dentre outras coisas,
// Usar{{}} (Sempre que for usar link de imagem usar uri:"***")
// Button= Botão 
// Header= Sempre a o inicio do app
// Body= Meio ou melhor o corpo do app!
// Footer= Bem dizer o meio para o final!
// marginTop= Margin de um objeto para o outro!