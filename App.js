import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import AppHeader from './src/components/AppHeader/AppHeader';

const App = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: getStatusBarHeight(),
    flex: 1,
  },
});

export default App;
