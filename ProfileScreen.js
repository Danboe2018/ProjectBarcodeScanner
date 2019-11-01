import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class ProfileScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}