import { Dimensions, StyleSheet } from 'react-native'
import theme from 'src/theme'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.6
  },
  image: {
    width: SCREEN_WIDTH,
    height: '100%'
  },
  brand: {
    marginTop: 10,
    textTransform: 'uppercase',
    color: theme.colors.grey
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5
  },
  price: {
    marginTop: 10,
    fontSize: 22
  },
  variants: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center'
  },
  variant: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 8
  }
})

export default styles
