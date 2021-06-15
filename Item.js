import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Feature from './Feature'

export default function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter(key => key !== 'breed')

  return (
    <View style={style.container}>
      <Text style={style.head}>{breed}</Text>
      {
        keys.map(key =>
            <Feature name={key} value={data[key]} />
        )
      }
    </View>
  )
}

const style = StyleSheet.create({
  head: {
    fontSize: 35
  },
  container: {
    padding: 10,
    margin: 5,
  }
})
