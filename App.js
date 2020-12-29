import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import {createAppContainer,createSwitchNavigator} from "react-navigation";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
export default function App() {
  return (
    <AppContainer/>
  );
}
var SwitchNavigator=createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  Drawer: { screen: AppDrawerNavigator },
  //DetailsScreen:DetailsScreen,
})

const AppContainer=createAppContainer(SwitchNavigator)