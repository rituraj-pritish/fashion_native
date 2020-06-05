import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import theme from 'app/theme'
import {
  NavBarWrapper,
  StyledLogo,
  FlexGrow,
  CartCount,
} from './NavBar.styled'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = ({ navigation: { navigate, openDrawer } }) => {
  return (
    <NavBarWrapper>
      <Ionicons
        onPress={openDrawer}
        name='ios-menu'
        size={36}
        color={theme.colors.grey}
      />

      <StyledLogo onPress={() => navigate('home')} />

      <FlexGrow />

      <SearchBar />

      <MaterialIcons
        onPress={() => navigate('cart')}
        name='shopping-cart'
        size={32}
        color='black'
      />
      <CartCount>
        <Text style={{ fontSize: 12 }}>{5}</Text>
      </CartCount>
    </NavBarWrapper>
  )
}

NavBar.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default NavBar
