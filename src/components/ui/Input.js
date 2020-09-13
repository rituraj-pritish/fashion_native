import React from 'react'
import styled from 'styled-components'
import { TextInput } from 'react-native'
import theme from 'src/theme'
import { darken, lighten } from 'polished'

export const StyledInput = styled(TextInput)`
  background: ${lighten(0.05, theme.colors.lightGrey)};
  border-radius: 20;
  padding-horizontal: 15;
  padding-vertical: 10;
  border: 1px solid ${darken(0.1, theme.colors.lightGrey)};
`

const Input = props => {
  return <StyledInput {...props} />
}

export default Input
