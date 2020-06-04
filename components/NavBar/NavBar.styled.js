import styled from 'styled-components'
import { View, StatusBar, Text } from 'react-native'
import { darken } from 'polished'
import theme from 'app/theme'

import Logo from 'app/assets/logo.svg'

export const NavBarWrapper = styled(View)`
  margin-top: ${StatusBar.currentHeight};
  background-color: ${theme.colors.lightGrey};
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20;
`

export const StyledLogo = styled(Logo)`
  margin-left: 15;
  margin-bottom: 5;
`

export const FlexGrow = styled(View)`
  flex: 1;
`
export const CartCount = styled(View)`
  border-radius: 100;
  height: 30;
  width: 30;
  background: ${darken(0.1, theme.colors.lightGrey)};
  display: flex;
  justify-content: center;
  align-items: center;
`

