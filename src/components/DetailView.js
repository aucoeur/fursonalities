import React from 'react';
import {
  StyleSheet, SafeAreaView, Text, Button, FlatList, View,
} from 'react-native';

import Rating from './features/Rating';

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
    color: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    padding: 15,
    justifyContent: 'center',
  },
});

export default function DetailView({ navigation, route }) {
  const { item } = route.params;

  const traits = Object.entries(item).filter((key) => key !== 'breed');
  console.log(item);
  // const ratings = (trait) => <Rating key={trait[0]} name={trait[0]} value={trait[1]} />;

  // const keys = Object.entries(item).filter((key) => key !== 'breed');
  // console.log(keys);
  return (
    <SafeAreaView style={style.container}>
      <View style={style.listContainer}>
        <Text style={style.name}>{item.breed}</Text>
        <FlatList
          data={traits}
          renderItem={({ trait, rating }) => (
            <Rating
              name={trait}
              value={rating}
            />
          )}
          keyExtractor={(trait) => trait}
        />

        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}
