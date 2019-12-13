import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';
import Camera from './src/screens/Camera';
import AddToList from './src/screens/AddToList';
import Coupon from './src/screens/Coupon';
import Check from './src/screens/Check';

const Project = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  AddToList: {
    screen: AddToList,
    navigationOptions: {
      header: null,
    },
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      header: null,
    },
  },
  Coupon: {
    screen: Coupon,
    navigationOptions: {
      header: null,
    },
  },
  Check: {
    screen: Check,
    navigationOptions: {
      header: null,
    },
  }
});
export default createAppContainer(Project);
