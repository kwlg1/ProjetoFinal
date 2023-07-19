import React, { useRef, useEffect} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const myFoto = require('./myFoto.jpeg');

export default function App() {
  const larAnimada = useRef(new Animated.Value(200)).current;
  const altAnimada = useRef(new Animated.Value(100)).current;

  useEffect(()=> {

  Animated.loop(
  
      Animated.sequence([
        Animated.timing(larAnimada, {
          toValue: 400,
          duration: 2000,
          useNativeDriver: false
        
        }),
        Animated.timing(altAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(altAnimada, {
          toValue: 100,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(larAnimada, {
          toValue: 200,
          duration: 2000,
          useNativeDriver: false
        }),
      ]),

  ).start();

  }, []);

 return (
   <View style={styles.container}>

      <Animated.View 
      style={{ 
        width: larAnimada,
        height: altAnimada,
        backgroundColor: "#000",
        justifyContent: 'center',
        borderRadius: 50,
    
      }}
      >
        <Text style={{color: "#fff", fontSize: 50, textAlign: 'center'}}>Fim....</Text>
      </Animated.View>

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
})