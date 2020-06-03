import React from 'react'
import PropTypes from 'prop-types'
import { Text, StatusBar } from 'react-native'
import { darken } from 'polished'
import { Ionicons } from '@expo/vector-icons'

import theme from 'app/theme'

import { NavBarWrapper } from './NavBar.styled'

const NavBar = ({ navigation: { navigate, openDrawer } }) => {
  StatusBar.setBackgroundColor(darken(0.15, theme.colors.lightGrey))
  StatusBar.setBarStyle('light-content')

  return (
    <NavBarWrapper>
      <Ionicons
        onPress={openDrawer}
        name='ios-menu'
        size={36}
        color={theme.colors.grey}
      />
    </NavBarWrapper>
  )
}

NavBar.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default NavBar
