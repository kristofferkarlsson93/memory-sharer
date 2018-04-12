import { MaterialDialog } from 'react-native-material-dialog';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Dialog extends React.Component {
  render() {
    return (
      <MaterialDialog
        title={this.props.title}
        visible={this.props.showDialog}
        onOk={this.props.onOk}
        onCancel={this.props.onOk}
        children={this.props.children}
        scrolled={this.props.scrolled}
        cancelLabel={this.props.cancelLabel}
        okLabel={this.props.okLabel}
      />
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

