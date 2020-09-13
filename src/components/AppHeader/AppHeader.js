import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'react-native-elements';
import theme from '../../theme';

const AppHeader = (props) => {
  return (
    <Header
      containerStyle={{
        backgroundColor: theme.colors.lightGrey,
      }}
      barStyle="dark-content"
      leftComponent={{ icon: 'menu' }}
      rightComponent={{ icon: 'search' }}
    />
  );
};

AppHeader.propTypes = {};

export default AppHeader;
