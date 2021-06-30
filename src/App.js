import { registerRootComponent } from 'expo'
import React from 'react'

import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ListView from './components/ListView'
import DetailView from './components/DetailView'

const Stack = createStackNavigator()

function App() {

  return (
  <SafeAreaView style={style.container}>
    <StatusBar style="auto" />
  {/* // <KeyboardAvoidingView
  //   behavior={Platform.OS === "ios" ? "padding": "height"}
  //   style={style.kbavoid}
  //   >  */}

    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{stackStyle}} >

        <Stack.Screen name="Home" component={ListView} options={{ title: "Goodbye World" }}/>
        <Stack.Screen name="Details" component={DetailView} />

    </Stack.Navigator>
    </NavigationContainer>
  {/* // </KeyboardAvoidingView> */}
  </SafeAreaView>

  );
}

const stackStyle = ({
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24
    },
  })

const style = StyleSheet.create({
  kbavoid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
  },
});


export default registerRootComponent(App)
