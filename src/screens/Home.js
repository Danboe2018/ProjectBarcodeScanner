import React from 'react';
import { Button, View, Text } from 'react-native';
class Home extends React.Component {
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
                <Button title="Go to Add To List screen"
                    onPress={() => this.props.navigation.navigate('AddToList')}
                />
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <Button title="Go to Camera screen"
                        onPress={() => this.props.navigation.navigate('Camera')}
                    />
                </View>
            </View>
        );
    }
}
export default Home;