import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Camera from "./src/screens/Camera";
const Project = createStackNavigator({
    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    },
    Camera: {
        screen: Camera
    }
});
export default createAppContainer(Project);