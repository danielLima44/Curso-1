import React from 'react';
import { Text, View , Image, Button, StyleSheet} from 'react-native';
import { ImageBackground } from 'react-native-web';

Header = ()=>{
    return(
            <View style={styles.view}>   
        <Text style={ styles.textStyle }> Inicio/ Padrão /</Text> 
        </View>
    );
   } 
     const styles = StyleSheet.create ({
    view:{
       ImageBackground:'#838',
       padding:20,width:'100%',
    },

       textStyle:{
        textAlign:'center',
        fontSize:30,
        color:'black',
    },
});
    export default Header