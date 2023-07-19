import React from 'react';
import { Text, StyleSheet, SafeAreaView, Image} from 'react-native';

const myFoto = require('./myFoto.jpeg');


export default function Bio() {
 return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.Image} source={myFoto}></Image>
        <Text style={styles.text}>
            Olá, meu Klêvson, tenho 17 anos, atualmente estudo no IFAL- campus Maceió e sou apaixonado por programação, mas minha maior paixão é a Larissa.
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
        padding: "7%",
        color: "#fff",
        textAlign: "justify"
    },

    Image: {
        alignItems: "center",
        width: 300,
        height: 400,
        borderRadius: 7,
    }
})