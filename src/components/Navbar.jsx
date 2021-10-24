import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import StyledButton from './StyledButton';
import SvgComponent from '../../assets/logo';

export default function Navbar(props) {
    return (
      <View style={styles.container}>
        <SvgComponent height="30pt"
            preserveAspectRatio="xMinYMin slice"
            width="100pt"
            viewBox="0 0 475 450">
        </SvgComponent>
        <View style={styles.buttonCluster}>
          <StyledButton secondary={true} onPress={() => {props.navigation.navigate('LogInView')}}>
            Log In
          </StyledButton>
          <StyledButton onPress={() => {props.navigation.navigate('SignUpView')}}>
            Sign Up
          </StyledButton>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonCluster: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
});