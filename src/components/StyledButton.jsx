import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function StyledButton(props) {
    return (
        <Pressable style={props.secondary ? styles.secondary : styles.primary} onPress={props.onPress} >
            <Text style={props.secondary ? styles.secondaryText : styles.primaryText}>{props.children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    secondary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        margin: 4,
        borderRadius: 50,
        elevation: 3,
        borderColor: '#8f7878',
        borderStyle: 'solid',
        borderWidth: 2,
        maxWidth: 150
    },
    secondaryText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#8f7878',
    },
    primary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        margin: 4,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#fd2a31',
        color: 'white',
        maxWidth: 150
    },
    primaryText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});