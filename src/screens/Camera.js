import React from 'react';
import { Text, View, StyleSheet, Vibration, AppState, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-community/async-storage';

class Camera extends React.Component {
  static navigationOptions = {
    title: 'Camera',
  };
  constructor(props) {
    super(props);
    this.barCodes = [];
    this.state = {
      torchOn: false,
      cameraMode: '',
      titleText: '',
    };
    console.log('Started');
    this.getAllKeys();
  }
  
  handleAppStateChange = (nextAppState) => {
    /* Reference to RNCamera instance */
    if (!this.camera) {
      console.log("No Camera")
      return;
    }

    console.log("App State: " + nextAppState)
    switch (nextAppState) {
      case "active":
        this.camera.resumePreview();
        break;
      case "background":
        // this.camera.pausePreview();
        break;
      case "inactive":
      default:
    }
  };
  
  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
    const { navigation } = this.props;
    this.setState({
      cameraMode: JSON.stringify(navigation.getParam('cameraMode', '11')),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          preview={true}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
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
          onBarCodeRead={this.onBarCodeRead.bind(this)}>
        </RNCamera>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <Image
            source={require('../../assets/images/camera.png')}
            style={{
              width: '100%',
              height: '100%'
            }} />
        </View>
      </View>
    );
  }

  onBarCodeRead(scanResult) {
    let index = 0;
    Vibration.vibrate(250);
    if (this.state.cameraMode.includes('Add')) {
      this.props.navigation.navigate('AddToList', {
        productCode: parseInt(scanResult.data),
      });
    } else {
      index = this.matchBarcode(scanResult.data);
      if (index == -1) {
        this.props.navigation.navigate('Check');
        console.log('DATA: ' + scanResult.data);
      } else {
        console.log('Index: ' + index);
        this.props.navigation.navigate('Check');
        AsyncStorage.removeItem(this.barCodes[index].Product);
        this.barCodes.splice(index, 1);
        alert('Item Removed From List.');
        this.getAllKeys();
      }
    }
  }

  debugBarcode() {
    console.warn(scanResult.data);
    if (scanResult.data != null) {
      if (!this.barCodes.includes(scanResult.data)) {
        this.barCodes.push(scanResult.data);
        console.warn('Barcodes :' + this.barCodes);
      }
    }
  }

  matchBarcode = testCode => {
    for (let barcode of this.barCodes) {
      if (barcode.Code == testCode) {
        return this.barCodes.indexOf(barcode);
      }
    }
    return -1;
  };

  getAllKeys = async () => {
    this.barCodes = [];
    try {
      AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
          stores.map((result, i, store) => {
            // get at each store's key/value so you can work with it
            let key = store[i][0];
            let value = store[i][1];

            this.barCodes.push({ Product: key, Code: parseInt(value) });
            this.forceUpdate();
          });
        });
      });
    } catch (e) {
      console.log('Get all error:' + e);
    }
    console.log('Logged all keys.');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40,
  },
  bottomOverlay: {
    position: 'absolute',
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Camera;
