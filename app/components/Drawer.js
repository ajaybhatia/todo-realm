import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Drawer extends Component {
  static navigationOptions = {
    drawerLabel: 'Sidebar'
  };

  render() {
    return (
      <View>
        <Text>Something</Text>
      </View>
    );
  }
}

export default Drawer;
