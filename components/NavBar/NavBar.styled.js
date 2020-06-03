import styled from 'styled-components'
import { View, StatusBar } from 'react-native'
import theme from 'app/theme'

export const NavBarWrapper = styled(View)`
  margin-top: ${StatusBar.currentHeight};
  background-color: ${theme.colors.lightGrey};
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding-right: 10;
  padding-left: 20;
`
