import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import config from '../../config/config';

export default class MemoryImage extends React.Component {
  render() {
    return (
      <Image
        style={{width: this.props.width, height: this.props.height}}
        source={{uri: config.baseUrl + '/image/?filePath='+this.props.filePath }}
      />
    );
  }
}


