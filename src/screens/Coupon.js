import React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';

class Coupon extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/coupon.png')}
        style={{ flex: 1 }} />
    )
  }
}

export default Coupon;