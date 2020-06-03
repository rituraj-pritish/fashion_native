import React from 'react'
import PropTypes from 'prop-types'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Text, TouchableOpacity } from 'react-native'
import { DrawerWrapper, FlexGrow } from './Drawer.styled'

const Drawer = ({ navigation, user, signOut }) => {
  const handleLogout = () => {
    signOut()
    navigation.closeDrawer()
  }
  return (
    <DrawerWrapper>
      {user && <Text>{user.name}</Text>}
      <FlexGrow />
      {user && <DrawerItem label='Logout' onPress={handleLogout} />}
    </DrawerWrapper>
  )
}

Drawer.propTypes = {
  navigation: PropTypes.object.isRequired,
  user: PropTypes.object,
  signOut: PropTypes.func.isRequired
}

export default Drawer
