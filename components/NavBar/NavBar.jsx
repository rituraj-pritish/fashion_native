import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { darken } from 'polished'
import theme from 'app/theme'

import { NavBarWrapper } from './NavBar.styled'

const NavBar = ({ navigation }) => {
  StatusBar.setBackgroundColor(darken(0.15, theme.colors.lightGrey))
  StatusBar.setBarStyle('light-content')

  return (
    <NavBarWrapper>
      <Text>Nav bar</Text>
    </NavBarWrapper>
  )
}

export default NavBar
