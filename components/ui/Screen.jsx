import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

export const ViewWrapper = styled(View)`
  padding-horizontal: 8;
  padding-top: 5;
`

const Screen = ({ children }) => {
  return <ViewWrapper>{children}</ViewWrapper>
}

export default Screen
