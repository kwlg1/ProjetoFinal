import React, { useRef, useEffect} from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

const myFoto = require('./coracao.png');

export default function App() {
  const dimensao = useRef(new Animated.Value(200)).current;

  useEffect(()=> {

  Animated.loop(
  
      Animated.sequence([
        Animated.timing(dimensao, {
          toValue: 300,
          duration: 700,
          useNativeDriver: false
        
        }),
        //Animated.timing(altAnimada, {
          //toValue: 300,
          //duration: 2000,
          //useNativeDriver: false
        //}),
        /* Animated.timing(altAnimada, {
          toValue: 100,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(larAnimada, {
          toValue: 200,
          duration: 2000,
          useNativeDriver: false
        }),*/
      ]),

  ).start();

  }, []);

 return (
   <View style={styles.container}>

      <Animated.Image
      style={{ 
        width: dimensao,
        height: dimensao,
        justifyContent: 'center',
      }}
      source={myFoto}
      >       
      </Animated.Image>
      <Text style={styles.Text}>Estou vivo!</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#8c8c8c",
    justifyContent: 'center',
    alignItems: 'center'
  },
  Text:{
    color: "#fff",
    fontSize: 30
  }
})