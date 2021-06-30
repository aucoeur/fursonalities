import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const style = StyleSheet.create({
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
    textAlign: 'center',
  },
});

export default function Search({ search, setSearch }) {
  return (
    <View style={style.search}>
      <TextInput
        style={style.searchText}
        clearButtonMode="always"
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
      />
    </View>
  );
}
