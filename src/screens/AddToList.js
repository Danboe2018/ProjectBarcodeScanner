import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
class AddToList extends React.Component {
    constructor(props) {
        super(props);
        barCodes = [{ Product: "Enquire Shampoo", Code: "1234567" }, { Product: "Hemp Shampoo", Code: "2345678" }];
    }

    static navigationOptions = {
        title: 'AddToList'
    };
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center'
            }}>
                <Text>Add to List:</Text>
                <TextInput
                    placeholder="Product Name:"
                    onChangeText={(text) => this.setState({ productName: text })}
                />

                <TextInput
                    placeholder="Product Code:"
                    onChangeText={(text) => this.setState({ productCode: text })}
                />

                {barCodes.map((type) => <Text>{type.Product} {type.Code}</Text>)}
                <View style={{
                    flex: 1,
                    alignItems: 'center',
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
    }
}
export default AddToList;