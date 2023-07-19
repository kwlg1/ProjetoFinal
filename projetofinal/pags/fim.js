import React, { useRef, useEffect} from 'react';
import { View, Text, StyleSheet, Animated, Image} from 'react-native';

const myFoto = require('./myFoto.jpeg');

export default function App() {
  const larAnimada = useRef(new Animated.Value(200)).current;
  const altAnimada = useRef(new Animated.Value(200)).current;


  useEffect(()=> {

  Animated.loop(
  
      Animated.sequence([
        Animated.timing(altAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(larAnimada, {
          toValue: 200,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(altAnimada, {
          toValue: 200,
          duration: 2000,
          useNativeDriver: false
        }), 

      ])
  ).start();

  }, []);

 return (
   <View style={styles.container}>

      <Animated.View 
      style={{ 
        width: larAnimada,
        height: altAnimada,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        borderRadius: 400,
    
      }}
      >
        {/*<Image style={{alignItems: "center", width: 400, height: 400, borderRadius: "20px"}} source={myFoto}></Image>*/}
        <Text style={{ textAlign: 'center', fontSize: 22, color: '#FFF'}}>FIM...</Text>
      </Animated.View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})