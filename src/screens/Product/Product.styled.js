import { lighten } from 'polished'
import { StyleSheet } from 'react-native'

import theme from 'src/theme'

const styles = StyleSheet.create({
  bottomButtons: {
    height: 50,
    flexDirection: 'row',
    width: '100%'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    fontSize: 18,
    backgroundColor: lighten(0.4, theme.colors.grey)
  },
  buttonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: theme.colors.white
  }
})

export default styles
