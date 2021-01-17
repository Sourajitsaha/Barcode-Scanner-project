import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ScanScreen from './screens/ScanScreen'
export default class App extends Component {
  render() {
    return (
     // <View style={{flex:1,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
        <ScanScreen />
      //</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
