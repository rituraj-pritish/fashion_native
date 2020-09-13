import styled from 'styled-components'
import { View, Dimensions, FlatList } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height

export const SlideItemWrapper = styled(View)`
  width: ${SCREEN_WIDTH / 3};
  height: 100%;
  margin-horizontal: 5;
`

export const Carousel = styled(FlatList)`
  margin-top: 15;
  width: ${SCREEN_WIDTH};
  height: ${SCREEN_HEIGHT / 3};
`
