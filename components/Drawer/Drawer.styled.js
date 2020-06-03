import styled from 'styled-components'
import { View, StatusBar, Dimensions } from 'react-native'

export const DrawerWrapper = styled(View)`
  margin-top: ${StatusBar.currentHeight};
  display: flex;
  height: ${Dimensions.get('screen').height - StatusBar.currentHeight};
  padding-bottom: 10;
`
export const FlexGrow = styled(View)`
  flex-grow: 1;
`
