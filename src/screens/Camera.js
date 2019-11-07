import React from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, Image, Vibration, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
class Camera extends React.Component {
    static navigationOptions = {
        title: 'Camera'
    };
    constructor(props) {
        super(props);
        this.barcodeCodes = [];
        this.handTourch = this.handleTourch.bind(this);
        this.state = {
            torchOn: false
        }
        console.log("Started")
    }
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    captureAudio={false}
                    flashMode={this.state.torchOn ? RNCamera.Constants.FlashMode.on :
                        RNCamera.Constants.FlashMode.off}
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
                    onBarCodeRead={this.onBarCodeRead.bind(this)}
                >
                    <Text style={{ backgroundColor: 'white' }}>BARCODE SCANNER</Text>
                    <Button
                        title="Go to Home"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </RNCamera>
                <View style={styles.bottomOverlay}>
                    <TouchableOpacity onPress={() =>
                        this.handleTourch(this.state.torchOn)}>
                        <Image style={styles.cameraIcon}
                            source={this.state.torchOn === true ?
                                require('../../images/flasher_on.png') :
                                require('../../images/flasher_off.png')} />

                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    onBarCodeRead(scanResult) {
        Vibration.vibrate(250);
        console.warn(scanResult.data);
        if (scanResult.data != null) {
            if (!this.barcodeCodes.includes(scanResult.data)) {
                Alert.alert("Right Barcode");
                this.barcodeCodes.push(scanResult.data);
                console.warn('Barcodes :' + this.barcodeCodes);
            }
        }
        return;
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

export default Camera;