import { darken } from 'polished'
import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import theme from '../../theme'

const styles = StyleSheet.create({
  statusBar: {
    height: getStatusBarHeight(),
    backgroundColor: darken(0.1, theme.colors.lightGrey)
  },
  drawerContainer: {
    height: '100%',
    paddingBottom: 10
  },
  flexGrow: {
    flexGrow: 1,
  },
  topSection: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    fontSize: 18
  },
  userIcon: {
    marginRight: 10
  }
})

export default styles
