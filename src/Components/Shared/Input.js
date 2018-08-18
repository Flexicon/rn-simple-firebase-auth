import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  },
  textInput: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
});

export { Input };
