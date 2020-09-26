import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LastScreen from '../Screens/LastScreen';
import CustomSideDrawer  from './CustomSideDrawer';

import NotificationScreen from '../screens/NotificationScreen' 

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : LastScreen
    },
  
  Notification : {
    screen : NotificationScreen
  },
  
},
  {
    contentComponent:CustomSideDrawer
  },
  {
    initialRouteName : 'Home'
  })