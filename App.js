import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contagem from './Contagem';

export default function App() {
  return (
    <View style={styles.container}>
        <Contagem></Contagem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'Black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
