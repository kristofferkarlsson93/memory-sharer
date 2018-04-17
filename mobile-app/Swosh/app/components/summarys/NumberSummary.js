import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../constants/colors'

export default class NumberSummary extends React.Component {
  render() {
    return (
      <View style={[styles.summaryCircle]}>
        <Text style={[styles.summaryText, styles.summaryNumber]}>{this.props.number}</Text>
        <Text style={[styles.summaryText, styles.summaryDescription]}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  summaryCircle: {
    backgroundColor: colors.primaryColor,
    width: 75,
    height: 75,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  summaryText: {
    textAlign: 'center'
  },
  summaryNumber: {
    fontSize: 25,
  },
  summaryDescription: {

  },
});

