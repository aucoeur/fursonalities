import React from 'react'
import { View, Text, StyleSheet } from "react-native";

export default function Feature(props) {
  const { name, value } = props
  return (
    <View style={style.container}>
      <Text style={style.left}>{name}</Text>
      <Text style={style.right}>{value}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2
  },
  left: {},
  right: {},
})
