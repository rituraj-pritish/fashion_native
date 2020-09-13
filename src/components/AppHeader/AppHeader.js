import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import theme from '../../theme';
import { darken } from 'polished';

const AppHeader = ({ navigation }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [text, setText] = useState('');

  const onCancel = () => {
    setShowSearchBar(false);
    setText('');
  };

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
              <Text>Fashion</Text>
            </View>
            <View style={styles.container}>
              <MaterialIcon
                name='search'
                size={30}
                style={styles.icon}
                color='black'
                onPress={() => setShowSearchBar(true)}
              />
              <MaterialIcon
                name='shopping-cart'
                size={30}
                onPress={() => {}}
                color='#000'
              />
            </View>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: getStatusBarHeight(),
    backgroundColor: darken(0.1, theme.colors.lightGrey),
  },
  header: {
    backgroundColor: theme.colors.lightGrey,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  searchContainer: {
    backgroundColor: 'red',
    flex: 1,
    height: 100,
  },
  searchBar: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingRight: 10,
    borderRadius: 4,
  },
  input: {
    paddingLeft: 10,
    width: Dimensions.get('screen').width - 55,
  },
});

export default AppHeader;
