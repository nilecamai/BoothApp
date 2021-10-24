import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, PlatformColor, Platform, Button, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title, Heading, Paragraph } from '../components/Headings';
import { register } from '../components/SignUp';
import Styles from '../components/Styles';
import Navbar from '../components/Navbar';
import StyledButton from '../components/StyledButton';

const signUpWrapper = (firstName, lastName, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        register(email, password, firstName, lastName);
        props.navigation.goBack();
    }
}

export default function SignUpView(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <SafeAreaView style={Styles.container}>
            <Navbar navigation={props.navigation}/>
            <View style={Styles.center}>
                <View style={Styles.limitedSizeContainer}>
                    <Title title='Sign Up' />
                    <Heading heading='First Name' />
                    <TextInput 
                        style={styles.input}
                        placeholder={'First Name'}
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName}
                        />
                    <Heading heading='Last Name' />
                    <TextInput 
                        style={styles.input}
                        placeholder={'Last Name'}
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                        />
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
                    <Heading heading='Confirm Password' />
                    <TextInput 
                        style={styles.input}
                        placeholder={'Confirm Password'}
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                        secureTextEntry
                        />
                </View>
                <StyledButton onPress={() => signUpWrapper(firstName, lastName, email, password, confirmPassword)}>
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
