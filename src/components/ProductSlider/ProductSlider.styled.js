import { StyleSheet, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height

import theme from 'src/theme'

const styles = StyleSheet.create({
  carousel: {
    marginTop: 15,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3
  },
  slideItemContainer: {
    width: SCREEN_WIDTH / 3,
    height: '100%',
    marginHorizontal: 5,
  },
  image: {
    height: '85%',
    width: '100%',
    borderRadius: theme.borderRadius
  },
  name: {
    marginTop: -28
  },
  title: {
    marginBottom: 10,
    fontSize: 18
  }
})

export default styles
