import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { darken } from 'polished'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import theme from 'app/theme'
import { authStateChangeHandler } from 'app/redux/auth'
import SignIn from 'app/screens/SignIn'
import SignUp from 'app/screens/SignUp'
import Home from 'app/screens/Home'
import NavBar from 'app/components/NavBar'
import Spinner from 'react-native-loading-spinner-overlay'
import Cart from 'app/screens/Cart'
import LoadingScreen from 'app/screens/LoadingScreen'

const Stack = createStackNavigator()

const StackNavigator = ({
  isAuthenticated,
  isLoading,
  authStateChangeHandler,
  appLoading
}) => {
  StatusBar.setBackgroundColor(darken(0.15, theme.colors.lightGrey))
  StatusBar.setBarStyle('light-content')
  
  useEffect(() => {
    authStateChangeHandler()
  }, [])

  if (appLoading) return <LoadingScreen />

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
            <Stack.Screen name='cart' component={Cart} />
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
  authStateChangeHandler: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  appLoading: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth, app }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: auth.isLoading,
  appLoading: app.isLoading
})

export default connect(mapStateToProps, { authStateChangeHandler })(
  StackNavigator
)
