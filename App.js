import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet, Alert,TouchableOpacity,
  Image
} from 'react-native';
import Camer from 'react-native-camera';

export default class barcodeScanner extends Component {
  constructor(props){
    super(props);
    this.handleTouch = this.handleTouch.bind(this);
    this.state = {
      torchOn: false
    }
  }
}