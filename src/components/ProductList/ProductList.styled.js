import { StyleSheet } from 'react-native'

import theme from 'src/theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 140,
    padding: 10
  },
  image: {
    width: 90,
    height: '100%',
    marginRight: 10,
    borderRadius: theme.borderRadius
  },
  details: {

  },
  name: {
    fontWeight: 'bold'
  },
  price: {
    marginTop: 10
  },
  buttons: {
    flexDirection: 'row'
  },
  button: {
    marginRight: 10
  }
})

export default styles
