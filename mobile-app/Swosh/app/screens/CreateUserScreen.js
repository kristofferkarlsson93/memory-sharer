import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';

//https://www.npmjs.com/package/react-native-material-textfield   funkar ej

export default class CreateUserScreen extends React.Component {

  state = {
    phone: '',
  };

  render() {

    let { phone } = this.state;
    return (
      <View style={styles.container}>
        <Text>Skapa Swosh-användare</Text>
        <TextField
          label='Phone number'
          value={phone}
          onChangeText={ (phone) => this.setState({ phone }) }
       />
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
