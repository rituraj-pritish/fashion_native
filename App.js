import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './src/redux';
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

export default App;
