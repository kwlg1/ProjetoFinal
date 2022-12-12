import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView} from 'react-native';

const cubo = require('./cubo.webp');
const python = require('./python.jpeg');
const Js = require('./imgjs.png');
const html = require('./imghtml.png');
const css = require('./imgcss.png');


export default function ImgGost() {
 return (
    <View style={styles.container}>
        <ScrollView>
        <Text style={styles.text}>
            {"cubo magico:\n"} 
        </Text>
        <Image source={cubo} style={styles.image}></Image>
        <Text></Text>
        <Text style={styles.text}>
            {"python:\n"}
        </Text>
        <Image source={python} style={styles.image}></Image>
        <Text style={styles.text}>
            {"Web:\n"}
        </Text>
        <Image source={html} style={styles.image}></Image>
        <Text style={styles.text}>
            {"\n"}
        </Text>
        <Image source={css} style={styles.image}></Image>
        <Text style={styles.text}>
            {"\n"}
        </Text>
        <Image source={Js} style={styles.image}></Image>
        </ScrollView>
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

    image: {
        alignItems: "center",
        width: 200,
        height: 200,
        borderRadius: 20,
    }
})