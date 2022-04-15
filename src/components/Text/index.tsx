import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ComponentImage = () => {
  return (
    <Text style={styles.txt} testID='header'>
      Hello Text
    </Text>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  }
});

export default ComponentImage;