import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Item(props) {
  const { name } = props

  return (
    <View>
      <Text style={style.text}>{name}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  text: {
    color: '#f90',
  }
})
