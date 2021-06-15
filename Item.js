import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter(key => key !== 'breed')

  return (
    <View style={style.container}>
      <Text style={style.head}>{index}: {breed}</Text>
      {
        keys.map(key =>
            <Text>{key}{data[key]}</Text>
        )
      }
    </View>
  )
}

const style = StyleSheet.create({
  head: {
    fontSize: 35
  },
  stats: {
    fontSize: 20,
    marginLeft: 30,
    justifyContent: "space-between"
  },
  container: {
    padding: 10,
    margin: 5,
  }
})
