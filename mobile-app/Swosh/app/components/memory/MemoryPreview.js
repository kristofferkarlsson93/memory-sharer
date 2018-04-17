import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MemoryImage from './MemoryImage';

export default class MemoryPreview extends React.Component {
  render() {
    return (
      <View style={{padding: 4}}>
        <MemoryImage 
          filePath={this.props.memory.filePath}
          height={this.props.height}
          width={this.props.width}
          borderRadius={this.props.borderRadius}
        />
      </View>
    );
  }
}


