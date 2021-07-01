import React, { useState } from 'react';
import {
  View, FlatList, StyleSheet, Platform, KeyboardAvoidingView, SafeAreaView,
} from 'react-native';

import Item from './features/Item';
import Search from './features/Search';
import { cats, dogs } from '../utils/breeds';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  listContainer: {
    padding: 15,
  },
});

export default function ListView({ navigation }) {
  const [search, setSearch] = useState('');
  // const [species, setSpecies] = useState('cats');

  const data = cats;

  const searchFilter = data.filter((item) => item.breed.includes(search)
    || item.breed.toLowerCase().includes(search));

  const renderItem = ({ item }) => (
    <Item
      name={item.breed}
      showDetails={() => {
        navigation.navigate('Details', { item });
      }}
    />
  );

  return (
    <SafeAreaView style={style.container}>

      <View style={style.listContainer}>
        <FlatList
          data={searchFilter}
          renderItem={renderItem}
          keyExtractor={(item) => item.breed}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : null}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : null}
        >
          <Search search={search} setSearch={setSearch} />

        </KeyboardAvoidingView>
      </View>

    </SafeAreaView>
  );
}
