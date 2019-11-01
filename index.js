/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ProfileScreen from './ProfileScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => ProfileScreen)

var React = require('react-native');
var SQLite = require('react-native-sqlite-storage')