import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round';

const Stack = createNativeStackNavigator();

// Pages
import HomeView from './src/views/HomeView';
import EventView from './src/views/EventView';
import BoothView from './src/views/BoothView';
import LogInView from './src/views/LogInView';
import SignUpView from './src/views/SignUpView';
import { getLikes, updateLikes } from './src/components/Likes';
import { getUserEmail, isSignedIn } from './src/components/CurrentUser';
import { register, signIn } from './src/components/SignUp';

//register("dummy@test.com", "test123", "dummy", "name")
if (!isSignedIn()) {
  signIn("dummy@test.com", "test123");
}
console.log(getUserEmail())

export default function App() {
  let [fontsLoaded] = useFonts({
    VarelaRound_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName={'HomeView'}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={'HomeView'}
          component={HomeView}
        />
        <Stack.Screen
          name={'EventView'}
          component={EventView}
        />
        <Stack.Screen
          name={'BoothView'}
          component={BoothView}
        />
        <Stack.Screen
          name={'LogInView'}
          component={LogInView}
        />
        <Stack.Screen
          name={'SignUpView'}
          component={SignUpView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
