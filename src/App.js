import React from 'react';

import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons as Icon } from 'react-native-vector-icons';

import HomeScreen from './screens/HomeScreen';
import StackScreen from './screens/StackScreen';

const Tab = createBottomTabNavigator();

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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'ios-desktop' : 'ios-desktop-outline';
                  break;
                case 'Cats':
                  iconName = focused ? 'ios-logo-octocat' : 'ios-logo-octocat';
                  break;
                case 'Dogs':
                  iconName = focused ? 'ios-paw' : 'ios-paw';
                  break;
                default:
                  // iconName = focused ? 'ios-desktop' : 'ios-desktop-outline'
                  break;
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cats" component={StackScreen} />
          <Tab.Screen name="Dogs" component={StackScreen} />
        </Tab.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);
