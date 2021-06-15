import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, SafeView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Item from './Item'
import { cats } from './breeds'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {cats.map(cat => <Item name={cat.breed}/>)}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
