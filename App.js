import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './src/redux';
import AppHeader from './src/components/AppHeader';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const devTools = __DEV__
  ? composeWithDevTools(applyMiddleware(reduxThunk))
  : applyMiddleware(reduxThunk);

const store = createStore(rootReducer, devTools);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
