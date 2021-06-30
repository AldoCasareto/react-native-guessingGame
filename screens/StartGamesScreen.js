import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import Colors  from '../constants/colors';
import Input from '../components/Input'

const StartGamesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number!</Text>
        <Input style={styles.input}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' onPress={() => {}} color={Colors.secondary} />
          </View>
          <View style={styles.button}>
            <Button title='Confirm' onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGamesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 90,
  },
  input:{
      width:50,
      textAlign: 'center',
  }
});
