import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MenuCard extends React.Component {
  render() {
    return (
     <View style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>
      <Text>{this.props.text}</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
});

