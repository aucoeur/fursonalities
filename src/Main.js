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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"}
        style={style.kbavoid}
      >

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
        <View style={style.search}>
          <TextInput
            style={style.searchText}
            clearButtonMode="always"
            placeholder="Search"
            onChangeText={setSearch}
            value={search} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  kbavoid: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flexBasis: 100,
    flexGrow: 1,
    width: '100%',
    // paddingTop: 10,
    paddingBottom: 10,
  },
  header: {
    color: '#f0f',
    fontSize: 50,
  },
  search: {
    flexShrink: 0,
    width: '95%',
    height: 40,
    marginBottom: 2,
    backgroundColor: 'hsla(0, 0%, 0%, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    // borderWidth: 1,
  },
  searchText: {
    fontSize: 24,
    width: '100%',
    textAlign: 'center'
  },
});
