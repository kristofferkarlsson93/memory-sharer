import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import config from '../config/config';

export default class MemoryPreview extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{width: this.props.width, height: this.props.height}}
          source={{uri: config.baseUrl + '/image/?filePath='+this.props.memory.filePath }}
        />
      </View>
    );
  }
}


