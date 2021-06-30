import React, { useState }  from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import Item from './features/Item'
import Search from './features/Search'
import { cats, dogs } from '../utils/breeds'

export default function ListView({ navigation }) {
  const [search, setSearch] = useState('')

  let data = cats

  return (
     <View
      style={style.listContainer}
      >
      <FlatList
        data={
          data.filter(item =>
            item.breed.includes(search) || item.breed.toLowerCase().includes(search)
          )}
        keyExtractor={ data.breed }
        renderItem={({ item }) => {
          return <Item
            keyExtractor={item.breed}
            name={item.breed}
            showDetails={() => {
              navigation.navigate('Details', { item })
            }} />
        }} />
      <Search search={search} setSearch={setSearch} />
    </View>
  )
}

const style = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 5,
  },
})
