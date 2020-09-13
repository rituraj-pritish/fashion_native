import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import theme from 'src/theme';
import { authStateChangeHandler } from 'src/redux/auth';
import SignIn from 'src/screens/SignIn';
import SignUp from 'src/screens/SignUp';
import Home from 'src/screens/Home';
import AppHeader from 'src/components/AppHeader';
import Spinner from 'react-native-loading-spinner-overlay';
import Cart from 'src/screens/Cart';
import LoadingScreen from 'src/screens/LoadingScreen';

const Stack = createStackNavigator();

const StackNavigator = ({
  isAuthenticated,
  isLoading,
  authStateChangeHandler,
  appLoading,
}) => {
  useEffect(() => {
    authStateChangeHandler();
  }, []);

  // if (appLoading) {
  //   return <LoadingScreen />;
  // }

  return (
    <>
      <Spinner visible={isLoading} />
      <Stack.Navigator
        screenOptions={{
          header: (props) => <AppHeader {...props} />,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName='home'>
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
  );
};

StackNavigator.propTypes = {
  authStateChangeHandler: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  appLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth, app }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: auth.isLoading,
  appLoading: app.isLoading,
});

export default connect(mapStateToProps, { authStateChangeHandler })(
  StackNavigator
);
