import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class RoundedButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
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
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        }} 
        onPress={this.props.onPress}
      >
        <Icon size={32} color="white" name={this.props.icon} />
    </TouchableOpacity>
    );
  }
}


