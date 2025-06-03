import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" id={undefined}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
