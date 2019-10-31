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
 render(){
   return (
     <View style ={styles.container}>
       <Camera
       style = {styles.preview}
       torchMode = {this.state.torchOn ? Camera.constants.torchMode.on:
      Camera.constants.torchMode.off}
      onBarCodeRead = {this.onBarCodeRead}
      ref={cam => this.camera = cam}
      aspect={Camera.constants.aspect.fill}>
        <Text style={{
          backgroundColor:'white'
        }}>BARCODE SCANNER</Text>
      </Camera>
      <View style = {styles.bottomOverlay}>
        <TouchableOpacity onPress={() =>
        this.handleTourch(this.state.torchOn)}>
          <Image style = {styles.cameraIcon}
          source={this.state.torchOn === true ?
          require('../../images/flasher_on.png') :
        require('../../images/flasher_off.png')}/>
        </TouchableOpacity>
      </View>
     </View>
   )
 }
}