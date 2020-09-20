import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

const Screen = ({ children }) => {
  return <ScrollView style={styles.screen}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 8,
    paddingTop: 5
  }
})

export default Screen;
