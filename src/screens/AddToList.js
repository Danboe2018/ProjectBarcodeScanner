import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class AddToList extends React.Component {
    constructor(props) {
        super(props);
        barCodes = [];
        this.getAllKeys();
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.setState({ productCode: JSON.stringify(navigation.getParam('productCode', "11")) })
    }

    static navigationOptions = {
        title: 'AddToList'
    };
    render() {
        const { navigation } = this.props;
        return (
            <View style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 24, marginBottom: 10 }}>Add to List:</Text>

                <Text>Product Name:</Text>
                <TextInput
                    style={{ height: 40, width: "95%", borderColor: 'black', borderWidth: 1, marginBottom: 20 }}
                    onChangeText={(text) => this.setState({ productName: text })}
                />

                <Text>Product Code:</Text>
                <TextInput
                    style={{ height: 40, width: "95%", borderColor: 'black', borderWidth: 1, marginBottom: 20 }}
                    defaultValue={JSON.stringify(navigation.getParam('productCode', "11"))}
                    onChangeText={(text) => this.setState({ productCode: text })}
                />

                {barCodes.map((type) => <Text>{type.Product} {type.Code}</Text>)}
                <View style={{
                    flex: 1,
                    alignSelf: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <Button title="Add To List" onPress={this.AddToArray} />
                    <Button title="Load All Keys" onPress={this.getAllKeys} />
                </View>
            </View>
        );
    }

    AddToArray = () => {
        //     barCodes.push({ Product: this.state.productName, Code: this.state.productCode })
        this.storeData();
    }

    storeData = async () => {
        try {
            await AsyncStorage.setItem(this.state.productName, this.state.productCode)
        } catch (error) {
            console.log('Store error:' + error)
            // Error saving data
        }
        this.getAllKeys();
    };

    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('TASKS')
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
            console.log('retrieve error:' + error)
        }
    };

    getAllKeys = async () => {
        barCodes.length = 0;
        try {
            AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiGet(keys, (err, stores) => {
                    stores.map((result, i, store) => {
                        // get at each store's key/value so you can work with it
                        let key = store[i][0];
                        let value = store[i][1];

                        console.log(key)
                        console.log(value)

                        barCodes.push({Product: key, Code: value})
                        this.forceUpdate();
                    });
                });
            });
        } catch (e) {
            console.log('Get all error:' + e)
        }
    }
}
export default AddToList;