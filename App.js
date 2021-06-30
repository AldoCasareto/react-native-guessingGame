import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGamesScreen from './screens/StartGamesScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='guess a number' />
      <StartGamesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
