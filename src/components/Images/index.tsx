import React from 'react';
import { StyleSheet, Image } from 'react-native';

const ComponentImage = () => {
  return (
    <Image
      testID='logo'
      style={styles.boxImage}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
      resizeMode='contain'
      accessibilityLabel='logo'
    />
  );
}

const styles = StyleSheet.create({
  boxImage: {
    width: 200,
    height: 200,
  }
});

export default ComponentImage;