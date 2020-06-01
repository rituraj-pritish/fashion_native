import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import rootReducer from 'app/redux'
import AppNavigator from 'app/navigation/AppNavigator'

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

const App = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
