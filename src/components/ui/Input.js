import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import theme from 'src/theme'
import { darken, lighten } from 'polished'

const Input = props => {
  return <TextInput style={styles.input} {...props} />
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: lighten(0.05, theme.colors.lightGrey),
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderStyle: 'solid',
    borderColor: darken(0.1, theme.colors.lightGrey),
    borderWidth: 1
  }
})

export default Input
