import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Input = ({ style }) => {
  console.log(style);
  return (
    <View>
      <TextInput
        keyboardType='number-pad'
        blurOnSubmit={true}
        maxLength={2}
        style={{ ...styles.input, ...style }}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
