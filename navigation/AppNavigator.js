import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from 'app/screens/SignIn'
import SignUp from 'app/screens/SignUp'
import Home from 'app/screens/Home'

const Stack = createStackNavigator()

const AppNavigator = ({ isAuthenticated = false }) => {
  return (
    <Stack.Navigator initialRouteName='home'>
      {isAuthenticated ? (
        <>
          <Stack.Screen name='home' component={Home} />
        </>
      ) : (
        <>
          <Stack.Screen name='signin' component={SignIn} />
          <Stack.Screen name='signup' component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default AppNavigator
