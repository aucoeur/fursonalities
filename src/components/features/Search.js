import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const style = StyleSheet.create({
  search: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchText: {
    height: 40,
    borderRadius: 25,
    backgroundColor: 'hsl(0, 0%, 90%)',
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
