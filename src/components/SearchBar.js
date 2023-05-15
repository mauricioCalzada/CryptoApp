import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={text => onChange(text)}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    margin: 10,
  },
});

export default SearchBar;
