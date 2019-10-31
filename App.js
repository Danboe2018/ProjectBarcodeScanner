import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet, Alert, TouchableOpacity,
  Image
} from 'react-native';
import Camera from 'react-native-camera';
export default class barcodeScanner extends Component {
  constructor(props){
    super(props);
    this.handTourch = this.handleTourch.bind(this);
    this.state = {
      torchOn: false
    }
 }
}