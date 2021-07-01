import { registerRootComponent } from 'expo';
import React from 'react';

import {
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ListView from './components/ListView';
import DetailView from './components/DetailView';

const Stack = createStackNavigator();

const stackStyle = ({
  // headerStatusBarHeight: 0, // Header had increased size with SafeArea for some reason (https://github.com/react-navigation/react-navigation/issues/5936)
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

function App() {
  return (
    <SafeAreaProvider style={style.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={stackStyle}
        >
          <Stack.Screen name="Home" component={ListView} options={{ title: 'Goodbye World' }} />
          <Stack.Screen name="Details" component={DetailView} />

        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);
