import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { darken } from 'polished';
import theme from '../../theme';

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

export default styles
