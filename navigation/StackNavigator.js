import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import SignIn from 'app/screens/SignIn'
import SignUp from 'app/screens/SignUp'
import Home from 'app/screens/Home'
import NavBar from 'app/components/NavBar'

const Stack = createStackNavigator()

const StackNavigator = ({ isAuthenticated }) => {
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

StackNavigator.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated
})

export default connect(mapStateToProps)(StackNavigator)
