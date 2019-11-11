import React from 'react';
import { View, Text } from 'react-native';
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
                <Text>Text For List Page</Text>
            </View>
        );
    }
}
export default Profile;