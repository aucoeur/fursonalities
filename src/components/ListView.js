import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Item from './features/Item';
import Search from './features/Search';
import { cats, dogs } from '../utils/breeds';

const style = StyleSheet.create({
  listContainer: {
    flex: 1,
    // flexGrow: 1,
    justifyContent: 'space-around',
    padding: 5,
  },
});

export default function ListView({ navigation }) {
  const [search, setSearch] = useState('');

  const data = cats;
  const searchFilter = data.filter((item) => item.breed.includes(search)
    || item.breed.toLowerCase().includes(search));

  return (
    <View style={style.listContainer}>
      <FlatList
        data={searchFilter}
        keyExtractor={data.breed}
        renderItem={({ item }) => (
          <Item
            keyExtractor={item.breed}
            name={item.breed}
            showDetails={() => {
              navigation.navigate('Details', { item });
            }}
          />
        )}
      />
      <Search search={search} setSearch={setSearch} />
    </View>
  );
}
