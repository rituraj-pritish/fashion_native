import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import {
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import SCREENS from 'src/constants/screens'
import styles from './AppHeader.styled'

const AppHeader = ({ navigation, totalItems }) => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [text, setText] = useState('')
  console.log('totalItems', totalItems)
  const onCancel = () => {
    setShowSearchBar(false)
    setText('')
  }

  return (
    <>
      <View style={styles.statusBar} />
      <View style={styles.header}>
        {showSearchBar ? (
          <TouchableWithoutFeedback
            style={styles.searchContainer}
            onPress={() => console.log('pres')}>
            <View style={styles.searchBar}>
              <TextInput
                style={styles.input}
                autoFocus
                onChangeText={(txt) => setText(txt)}
              />
              <FontAwesomeIcon name='times' size={18} onPress={onCancel} />
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <>
            <View style={styles.container}>
              <MaterialIcon
                name='menu'
                size={30}
                style={styles.icon}
                onPress={() => navigation.openDrawer()}
              />
              <Text onPress={() => navigation.navigate(SCREENS.HOME)} >Fashion</Text>
            </View>
            <View style={styles.container}>
              <MaterialIcon
                name='search'
                size={30}
                style={styles.icon}
                color='black'
                onPress={() => setShowSearchBar(true)}
              />
              <View>
                <MaterialIcon
                  name='shopping-cart'
                  size={30}
                  onPress={() => navigation.navigate(SCREENS.CART)}
                  color='#000'
                />
                <View style={styles.cartBadge}>
                  <Text style={styles.badgeText}>{totalItems}</Text>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </>
  )
}

AppHeader.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    openDrawer: PropTypes.func.isRequired,
  }),
  totalItems: PropTypes.number.isRequired
}

export default AppHeader
