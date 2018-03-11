import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Button, StyleSheet } from 'react-native';

import Home from './screens/Home';
import Drawer from './components/Drawer';

const drawerNavigator = DrawerNavigator({
  Home: {
    screen: Home
  },
  Drawer: {
    screen: Drawer
  }
});

export default drawerNavigator;
