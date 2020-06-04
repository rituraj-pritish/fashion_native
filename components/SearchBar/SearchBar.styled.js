import styled from 'styled-components'
import { Octicons } from '@expo/vector-icons'
import { View, Dimensions, StatusBar } from 'react-native'
import Modal from 'react-native-modal'

export const SearchIcon = styled(Octicons)`
  margin-right: 20;
`

export const SearchBarWrapper = styled(Modal)`
  position: absolute;
  width: ${Dimensions.get('screen').width * 0.92};
  height: 50;
  background: white;
  left: 0;
  border-radius: 20;
  top: -15;
  left: -5;
  padding-horizontal: 10;
`
