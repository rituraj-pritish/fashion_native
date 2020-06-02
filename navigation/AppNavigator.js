import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import SignIn from 'app/screens/SignIn'
import SignUp from 'app/screens/SignUp'
import Home from 'app/screens/Home'
import NavBar from 'app/components/NavBar'

const Stack = createStackNavigator()

const AppNavigator = ({ isAuthenticated = false }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <NavBar {...props} />,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
      initialRouteName='home'
    >
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
