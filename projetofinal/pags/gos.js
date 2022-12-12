import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

export default function Gos() {
    return (
       <View style={styles.container}>
           <Text style={styles.text}>
                Bom, gosto de etudar programação, programar nas hosras vagas, sou apaixonado em cubo e pluzzes(o pai é sub20 no cubo magico), gosto de coisas que envolvam tecnologia e tals.
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