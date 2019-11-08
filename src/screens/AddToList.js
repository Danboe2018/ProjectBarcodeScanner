import React from 'react';
import { Button, View, Text } from 'react-native';
class AddToList extends React.Component {
    static navigationOptions = {
        title: 'AddToList'
    };
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text>Text For Screen</Text>
            <Button>Add To List</Button>
            </View>
        );
    }
}
export default AddToList;