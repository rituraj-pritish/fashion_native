import { StatusBar, Dimensions, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  drawerContainer: {
    marginTop: getStatusBarHeight(),
    height: Dimensions.get('screen').height - StatusBar.currentHeight,
    paddingBottom: 10
  },
  flexGrow: {
    flexGrow: 1
  }
})

export default styles
