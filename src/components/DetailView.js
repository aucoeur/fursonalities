import React from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';

import Rating from './features/Rating';

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
});

export default function DetailView({ navigation, route }) {
  const { item } = route.params;
  const keys = Object.keys(item).filter((key) => key !== 'breed');

  return (
    <View style={style.view}>

      <Text style={style.name}>{item.breed}</Text>

      { keys.map((key) => <Rating key={key} name={key} value={item[key]} />) }

      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}
