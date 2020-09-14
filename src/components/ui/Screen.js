import React from 'react';
import { StyleSheet, View } from 'react-native';

const Screen = ({ children }) => {
  return <View style={styles.screen}>{children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 8,
    paddingTop: 5
  }
})

export default Screen;
