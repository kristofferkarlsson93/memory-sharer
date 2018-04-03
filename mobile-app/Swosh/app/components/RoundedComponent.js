import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class RoundedComponent extends React.Component {
  render() {
    return (
      <View
        style={{
          borderWidth: this.props.borderWidth,
          borderColor: this.props.borderColor, 
          alignItems:'center',
          justifyContent:'center',
          width: this.props.size,
          height: this.props.size,
          backgroundColor: this.props.backgroundColor,
          borderRadius:100,
          elevation: 5,
          
        }} 
        onPress={this.props.onPress}
      >
      {this.props.children}
    </View>
    );
  }
}


