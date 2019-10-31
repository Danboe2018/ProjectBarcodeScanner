import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet, Alert, TouchableOpacity,
  Image
} from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';
export default class barcodeScanner extends Component {
  constructor(props) {
    super(props);
    this.handTourch = this.handleTourch.bind(this);
    this.state = {
      torchOn: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          <Text style={{
            backgroundColor: 'white'
          }}>BARCODE SCANNER</Text>
        </RNCamera>
        <View style={styles.bottomOverlay}>
          <TouchableOpacity onPress={() =>
            this.handleTourch(this.state.torchOn)}>
            <Image style={styles.cameraIcon}
              source={this.state.torchOn === true ?
                require('./images/flasher_on.png') :
                require('./images/flasher_off.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  onBarCodeRead = (e) => {
    Alert.alert("Barcode value is " + e.data, " Barcode type is " + e.type);
  }

  handleTourch(value) {
    if (value === true) {
      this.setState({ torchOn: false });
    } else {
      this.setState({ torchOn: true });
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40
  },

  bottomOverlay: {
    position: "absolute",
    width: "100%",
    flex: 20,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
});