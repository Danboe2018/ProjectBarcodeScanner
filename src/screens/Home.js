import React from 'react';
import { Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends React.Component {

    constructor(props) {
        super(props);
        barCodes = [];
        this.getAllKeys();
    }

    static navigationOptions = {
        title: 'Home'
    };
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {barCodes.map((type) => <Text key={type.Product}>{type.Product} {type.Code}</Text>)}

                <View style={{
                    flex: 2,
                    alignItems: 'stretch',
                    justifyContent: 'center'
                }}>

                    <Button title="Go to Add To List screen"
                        onPress={() => this.props.navigation.navigate('Camera', { cameraMode: "Add" })}
                    />

                    <Button title="Go to Scan from List screen"
                        onPress={() => this.props.navigation.navigate('Camera', { cameraMode: "Scan" })}
                    />
                </View>
            </View>
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

                        barCodes.push({ Product: key, Code: value })
                        this.forceUpdate();
                    });
                });
            });
        } catch (e) {
            console.log('Get all error:' + e)
        }
    }
}
export default Home;