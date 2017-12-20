import React from 'react';
import { StyleSheet, Text, View,Platform,ImageBackground } from 'react-native';
import {Button} from 'native-base';
var myBackground=require('../assets/splash01.jpg')

class Landing extends React.Component{
    render(){
        return(
         <ImageBackground source={myBackground}
                      style = {styles.viewStyle}>
                <Text
                  style={styles.titleStyle}
                > Welcome to PokeSearch </Text>
                <Button
                 block ={true}
                 style={styles.buttonStyle}
                 onPress={()=>{}}
                >
                  <Text style={styles.buttonText}> Start Searching   </Text>
                </Button>             
         </ImageBackground> 
        )
    }
}
const styles={
  viewStyle:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  titleStyle:{
    fontSize:30,
    color:'blue',
    alignItems:'center'
  },
  buttonStyle:{
    margin:10
  },
  buttonText:{
    color:'white'
  }
}

export default Landing;