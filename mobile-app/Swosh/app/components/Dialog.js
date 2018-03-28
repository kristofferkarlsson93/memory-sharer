import { MaterialDialog } from 'react-native-material-dialog';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MemoryDetails from './memory/MemoryDetails';

export default class RoundedButton extends React.Component {
  render() {
    return (
      <MaterialDialog
        title="Use Google's Location Service?"
        visible={true}
        onOk={() => this.setState({ visible: false })}
        onCancel={() => this.setState({ visible: false })}>
          <View>
            <MemoryDetails />
            <Text>Hejs</Text>  
          </View>
      </MaterialDialog>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

