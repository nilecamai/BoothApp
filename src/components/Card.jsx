import React from 'react';
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity, Dimensions } from 'react-native';
import { Title, Heading } from '../components/Headings';

export default function Card({ image, name, location, onclick }) {
    console.log(image);
    return (
        <TouchableOpacity onPress={onclick}>
            <View style={styles.card}>
                <Image source = {image}
                style = {styles.image}
                />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.body}>{location}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        marginLeft: 0,
        marginRight: Platform.OS === 'web' ? 24 : 16,
        marginTop: 2,
        marginBottom: 2,
        width: 250,
        height: 350,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 20,
        marginBottom: 8,
    },
    name: {
        fontSize: 20,
        marginVertical: 4,
        fontFamily: 'VarelaRound_400Regular',
        fontWeight: '600',
    },
    body: {
        fontSize: 16,
        fontFamily: 'VarelaRound_400Regular',
    }
});