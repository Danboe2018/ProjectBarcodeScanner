import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from "./src/screens/Home";
import Camera from "./src/screens/Camera";
import AddToList from "./src/screens/AddToList";
const Project = createStackNavigator({
    Home: {
        screen: Home
    },
    AddToList: {
        screen: AddToList
    },
    Camera: {
        screen: Camera
    }
});
export default createAppContainer(Project);