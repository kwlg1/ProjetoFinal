import React from 'react';
import { Text, StyleSheet, SafeAreaView} from 'react-native';

export default function VidAcad() {
    return (
       <SafeAreaView style={styles.container}>
           <Text style={styles.text}>
                Estudo no IFAL-campus Maceió, na qual estou fazendo o 3º do ensino médio integrado com o curso de desenvolvimento de sistemas.
                sei programar em algumas liguagens como: Python, JavaScript, Java, Html, css, mySql.
           </Text>
       </SafeAreaView>
     );
   }
   
   const styles = StyleSheet.create({
       container: {
           flex: 1,
           backgroundColor: "#8c8c8c",
           alignItems: "center",
           justifyContent: "center",
           padding: "10%",
       },
       text: {
           color: "#fff",
           textAlign: 'justify',
           padding: "15%"
       }
   })