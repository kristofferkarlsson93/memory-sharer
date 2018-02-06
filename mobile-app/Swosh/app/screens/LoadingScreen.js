import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import LoadingSpinner from '../components/LoadingSpinner'

export default class LoadingScreen extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <LoadingSpinner/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedButton: {
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20, 
  }
});