import React from 'react';
import {
  TouchableHighlight, Text, StyleSheet, View,
} from 'react-native';

const style = StyleSheet.create({
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingLeft: 5,
    width: '100%',
  },
  headText: {
    fontSize: 25,
  },
  caret: {
    color: 'rgba(0,0,0,0.2)',
    fontSize: 35,
  },
});

export default function Item({ name, showDetails }) {
  // const keys = Object.keys(data).filter(key => key !== 'breed')

  // const average = (keys.reduce((acc, key) => {
  //   return acc + data[key]
  // }, 0) / keys.length).toFixed(1)

  return (
    <TouchableHighlight
      style={style.container}
      underlayColor="rgba(0,0,0,0.1)"
      onPress={() => showDetails(name)}
    >

      <View style={style.head}>
        <Text style={style.headText}>{name}</Text>
        <Text style={style.caret}>›</Text>
      </View>
    </TouchableHighlight>
  );
}
