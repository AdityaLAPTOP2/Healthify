import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
//import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import BmiScreen from '../screens/BmiScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingScreen from '../screens/SettingScreen';
import TipsScreen from '../screens/TipsScreen';
import MyRecords from '../screens/MyRecords';
import BmiChart from '../screens/BmiChart';
export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : DetailsScreen
    },
  BmiScreen : {
    screen : BmiScreen
  },
  BmiChart:{
    screen: BmiChart
  },
  MyRecords:{
    screen:MyRecords
  },
  TipsScreen : {
    screen : TipsScreen
  },
  Setting : {
    screen : SettingScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })