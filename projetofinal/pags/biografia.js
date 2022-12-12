import React from 'react';
import { Text, StyleSheet, View, Image} from 'react-native';

const myFoto = require('./myFoto.jpeg');


export default function Bio() {
 return (
    <View style={styles.container}>
        <Image style={styles.Image} source={myFoto}></Image>
        <Text style={styles.text}>
            Olá, meu Klêvson, tenho 16 anos, atualmente estudo no IFAL- campus Maceió e sou apaixonado por programação.
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
    },

    Image: {
        alignItems: "center",
        width: 300,
        height: 400,
        borderRadius: "20px",
    }
})