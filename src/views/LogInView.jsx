import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, PlatformColor, Platform, Button, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title, Heading, Paragraph } from '../components/Headings';
import { signIn } from '../components/SignUp';
import { isSignedIn } from '../components/CurrentUser';
import Styles from '../components/Styles';
import Navbar from '../components/Navbar';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../src/firebase-config';
import StyledButton from '../components/StyledButton';

const logInWrapper = (email, password, navigation) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        navigation.goBack();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert('Error: email or password does not match our records.');
    });
}

export default function LogInView(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={Styles.container}>
            <Navbar navigation={props.navigation}/>
            <View style={Styles.center}>
                <View style={Styles.limitedSizeContainer}>
                    <Title title='Log In' />
                    <Heading heading='Email' />
                    <TextInput 
                        style={styles.input}
                        placeholder={'Email'}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        />
                    <Heading heading='Password' />
                    <TextInput 
                        style={styles.input}
                        placeholder={'Password'}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry
                        />
                </View>
                <StyledButton onPress={() => logInWrapper(email, password, props.navigation)}>
                    Log In
                </StyledButton>
                <StyledButton secondary={true} onPress={() => props.navigation.goBack()}>
                    Back
                </StyledButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#8f787833',
        padding: 10,
    }
});
