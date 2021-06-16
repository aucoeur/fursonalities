import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Feature from './Feature'

export default function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter(key => key !== 'breed')

  const average = (keys.reduce((acc, key) => {
    return acc + data[key]
  }, 0) / keys.length).toFixed(1)

  return (
    <View style={style.container}>
      <View style={style.head}>
        <Text style={style.headText}>{breed}</Text>
        <Text style={style.headText}>{!isNaN(average) ? average : '-- '}</Text>
      </View>

      { keys.map(key =>
        <Feature key={key} name={key} value={data[key]} />
      )}

    </View>
  )
}

const style = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 20
  },
  headText: {
    fontSize: 35,
  },
  container: {
    padding: 10,
    margin: 5,
  }
})
