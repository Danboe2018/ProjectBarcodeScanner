import React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends React.Component {
  constructor(props) {
    super(props);
    barCodes = [];
    this.getAllKeys();
  }

  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: .7,
              backgroundColor: '#FFFFFF'
            }} />

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Camera', { cameraMode: 'Add' })
              }
            >
              <Text>Go to Add to List screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Camera', { cameraMode: 'Scan' })
              }
            >
              <Text>Go to Add to List screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Coupon', {})
              }
            >
              <Text>Go to Add to List screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Coupon', {})
              }
            >
              <Text>Go to Add to List screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Coupon', {})
              }
            >
              <Text>Go to Add to List screen</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#FFFFFF'
            }}>
          </View>
        </View>
      </ImageBackground>
    );
  }

  getAllKeys = async () => {
    barCodes.length = 0;
    try {
      AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
          stores.map((result, i, store) => {
            // get at each store's key/value so you can work with it
            let key = store[i][0];
            let value = store[i][1];

            barCodes.push({ Product: key, Code: value });
            this.forceUpdate();
          });
        });
      });
    } catch (e) {
      console.log('Get all error:' + e);
    }
  };
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 3,
    borderRadius: 20,
    width: 270,
    height: 50,
    marginBottom: 7,
  }
});

export default Home;
