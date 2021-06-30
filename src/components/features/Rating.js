import React from 'react'
import { View, Text, StyleSheet } from "react-native";

export default function Rating({ name, value }) {

  let stars = ''

  // ★★★☆☆
  for (let i = 0; i < 5; i +=1) {
    i < value ? stars += '★' : stars += '☆'
  }

  return (
    <View style={style.container}>
      <Text style={style.left}>{name}</Text>
      <Text style={style.right}>{stars}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
  left: {
    fontSize: 18,
  },
  right: {
    color: 'hsl(50, 100%, 45%)',
    fontSize: 20,
  },
})
