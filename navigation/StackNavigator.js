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
import Spinner from 'react-native-loading-spinner-overlay'

const Stack = createStackNavigator()

const StackNavigator = ({ isAuthenticated, isLoading }) => {
  return (
    <>
      <Spinner visible={isLoading} />
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
    </>
  )
}

StackNavigator.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: auth.isLoading
})

export default connect(mapStateToProps)(StackNavigator)
