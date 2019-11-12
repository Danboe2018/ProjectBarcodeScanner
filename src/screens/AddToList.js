import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AsyncStorage } from '@react-native-community/async-storage';

class AddToList extends React.Component {
    constructor(props) {
        super(props);
        barCodes = [{ Product: "Enquire Shampoo", Code: "1234567" }, { Product: "Hemp Shampoo", Code: "2345678" }];
        
    }

    componentDidMount(){
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
                </View>
            </View>
        );
    }

    AddToArray = () => {
        barCodes.push({ Product: this.state.productName, Code: this.state.productCode })
        this.forceUpdate();
        this._storeData();
        this._retrieveData();
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('TASKS', 'I like to save it.');
        } catch (error) {
            // Error saving data
        }
    };

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('TASKS');
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };
}
export default AddToList;