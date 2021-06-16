import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Item from './components/Item'
import { cats, dogs } from './utils/breeds'

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={style.container}>
      <StatusBar style="auto" />
      <View style={style.search}>
        <TextInput
          style={style.searchText}
          placeholder="Search"
          onChangeText={setSearch}
          value={search} />
      </View>
      <View style={style.listContainer}>
        <FlatList
          keyExtractor={item => item.breed}
          data={
            cats.filter(item =>
              item.breed.includes(search) || item.breed.toLowerCase().includes(search)
            )}
          renderItem={({item, index}) => {
            return <Item data={item} index={index}/>
          }} />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '100%',
  },
  header: {
    color: '#f0f',
    fontSize: 50,
  },
  search: {
    width: '95%',
    padding: 5,
    marginTop: 50,
    backgroundColor: 'hsla(0, 0%, 0%, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  searchText: {
    fontSize: 24,

  },
});
