import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

export default function VidAcad() {
    return (
       <View style={styles.container}>
           <Text style={styles.text}>
                Estudo no IFAL- campus Maceió, na qual estou fazendo o 2º do ensino médio integrado com o curso de desenvolvimento de sistemas.

                sei programar em algumas liguagens como: Python, JavaScript, Java, Html, css, mySql.
           </Text>
       </View>
     );
   }
   
   const styles = StyleSheet.create({
       container: {
           flex: 1,
           backgroundColor: "#e9F3FB",
           alignItems: "center",
           justifyContent: "center",
           padding: "10%",
       },
       text: {
           color: "black",
       }
   })