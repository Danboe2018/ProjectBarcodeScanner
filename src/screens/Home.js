import React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends React.Component {
  constructor(props) {
    super(props);
    barCodes = [];
    products = [
      "Enquire Shampoo", 
      "Hemp Shampoo",
      "Swedish Shampoo",
      "Redken Brews",
      "AntiPerspirant"
    ];
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
                this.props.navigation.navigate('Camera', { cameraMode: 'Scan' })
              }
            >
              <Text>{products[0]}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Camera', { cameraMode: 'Scan' })
              }
            >
              <Text>{products[1]}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Camera', { cameraMode: 'Scan' })
              }
            >
              <Text>{products[2]}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Camera', { cameraMode: 'Scan' })
              }
            >
              <Text>{products[3]}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate('Camera', { cameraMode: 'Scan' })
              }
            >
              <Text>{products[4]}</Text>
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
      AsyncStorage.setItem()
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
    justifyContent: 'center', shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1.5, width: 1.5 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 3, // Android
    padding: 10,
    borderRadius: 20,
    width: 270,
    height: 50,
    marginBottom: 7,
  }
});

export default Home;
