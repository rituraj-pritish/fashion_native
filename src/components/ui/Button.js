import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import theme from 'src/theme';

const CustomButton = ({ title, ...props }) => {
  return (
    <View style={styles.button}>
      <Button title={title} {...props} color={theme.colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    overflow: 'hidden',
    marginVertical: 10
  }
})

export default CustomButton;
