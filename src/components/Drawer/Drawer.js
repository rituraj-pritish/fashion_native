import React from 'react';
import PropTypes from 'prop-types';
import { DrawerItem } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'

import styles from './Drawer.styled'

const Drawer = ({ navigation, user, signOut }) => {
  const handleLogout = () => {
    signOut();
    navigation.closeDrawer();
  };
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.statusBar}/>

      <View style={styles.topSection}>
        <FontAwesomeIcon name='user-circle' size={28} style={styles.userIcon} />
        {user && <Text style={styles.user}>{user.name}</Text>}
      </View>

      {user && (
        <>
          <DrawerItem label='Orders' />
          <DrawerItem label='Profile' />
        </>
      )}

      <View style={styles.flexGrow} />

      {user && <DrawerItem label='Logout' onPress={handleLogout} />}
    </View>
  );
};

Drawer.propTypes = {
  navigation: PropTypes.object.isRequired,
  user: PropTypes.object,
  signOut: PropTypes.func.isRequired,
};

export default Drawer;

