import { Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height

import { StyleSheet } from 'react-native'

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
  title: {
    marginBottom: 10,
    fontSize: 18
  }
})

export default styles
