import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Item from './Item'
import { cats, dogs } from './breeds'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={item => item.breed}
            data={cats}
            renderItem={({item, index}) => {
              return <Item data={item} index={index}/>
            }} />
          <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#f0f',
    fontSize: 50,
  },
});
