import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from 'src/components/Drawer';
import StackNavigator from './StackNavigator';
import SCREENS from 'src/constants/screens'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={SCREENS.STACK}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name={SCREENS.STACK} component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
