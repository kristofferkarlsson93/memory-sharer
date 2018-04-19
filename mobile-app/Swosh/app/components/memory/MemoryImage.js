import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import config from '../../config/config';

export default class MemoryImage extends React.Component {
 
  render() {
    console.log(this.props.filePath);
    return (
      <Image
        style={{width: this.props.width, height: this.props.height, borderRadius: this.props.borderRadius || 0}}
        source={{uri: this.props.filePath }}
      />
    );
  }
}


