import React, { useRef, useEffect} from 'react';
import { View, StyleSheet, Text, Animated, StatusBar} from 'react-native';


const myFoto = require('./coracao.png');

export default function App() {
  const dimensao = useRef(new Animated.Value(200)).current;

  useEffect(()=> {

  Animated.loop(
  
      Animated.sequence([
        Animated.timing(dimensao, {
          toValue: 350,
          duration: 600,
          useNativeDriver: false
        
        }),
        Animated.timing(dimensao, {
          toValue: 200,
          duration: 600,
          useNativeDriver: false
        }),
      ]),

  ).start();

  }, []);

 return (
  
  <View style={styles.container}>
     <StatusBar></StatusBar>
      <Animated.Image
      style={{ 
        width: dimensao,
        height: dimensao,
        justifyContent: 'center',

      }}
      source={myFoto}
      >       
      </Animated.Image>
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