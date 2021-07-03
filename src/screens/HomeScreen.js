import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'tomato',
  },
});
export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={style.header}>
        Fursonalities
      </Text>
      <Text>To begin, please select a tab below</Text>
    </View>

  );
}
