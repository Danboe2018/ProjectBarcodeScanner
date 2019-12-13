import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-community/async-storage';

class Check extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row'
        }}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          // preview={true}
          // style={styles.preview}
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
          }}>
        </RNCamera>
        <View style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0
        }}>
          <Image
            source={require('../../assets/images/wrong.png')}
            style={{
              width: '100%',
              height: '100%'
            }} />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

export default Check;