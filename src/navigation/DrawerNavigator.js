import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from 'src/components/Drawer';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName='stack'
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name='stack' component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
