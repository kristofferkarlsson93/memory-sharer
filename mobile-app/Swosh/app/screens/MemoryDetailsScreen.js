import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import LoadingSpinner from '../components/LoadingSpinner'
import MemoryDetails from '../components/memory/MemoryDetails';

export default class LoadingScreen extends React.Component {

  render() {
    
    return (
      <View style={styles.container}>
        <MemoryDetails />
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
});