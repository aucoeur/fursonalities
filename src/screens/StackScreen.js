import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListView from '../components/ListView';
import DetailView from '../components/DetailView';

const ListStack = createStackNavigator();

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

export default function ListStackScreen({ route }) {
  return (
    <ListStack.Navigator
      initialRouteName={route.name}
      screenOptions={stackStyle}
    >
      <ListStack.Screen
        name={route.name}
        component={ListView}
        options={{
          title: route.name,
          species: route.name,
        }}
      />
      <ListStack.Screen name="Details" component={DetailView} />

    </ListStack.Navigator>
  );
}
