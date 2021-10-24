import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export function Title({ title }) {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}

export function Heading({ heading }) {
    return (
        <Text style={styles.heading}>{heading}</Text>
    )
}

export function Paragraph ({ text }) {
    return (
        <Text style={styles.paragraph}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        fontFamily: 'VarelaRound_400Regular',
    },
    heading: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 8,
        fontFamily: 'VarelaRound_400Regular',
    },
    paragraph: {
        fontSize: 16,
        fontFamily: 'VarelaRound_400Regular',
    }
});