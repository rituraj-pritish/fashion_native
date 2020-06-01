import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import SignIn from 'app/screens/SignIn'
import SignUp from 'app/screens/SignUp'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='signin' component={SignIn}/>
      <Stack.Screen name='signup' component={SignUp}/>
    </Stack.Navigator>
  )
}

export default AppNavigator
