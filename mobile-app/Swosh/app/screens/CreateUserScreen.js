import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import RoundedComponent from '../components/RoundedComponent';
import colors from '../constants/colors';
import { FormLabel, FormInput } from 'react-native-elements'


export default class CreateUserScreen extends React.Component {

  state = {
    phone: '',
  };

  render() {

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.createUserContainer}>
          <Icon size={50} color="white" name="person" />
          <View style={styles.formContainer}>
            <FormLabel><Text style={styles.label}>Välj ett användarnamn</Text></FormLabel>
            <FormInput inputStyle={styles.input} underlineColorAndroid='transparent'/>    
          </View>
        </View>
      </KeyboardAvoidingView>
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
  createUserContainer: {
    backgroundColor: colors.primaryColor,
    height: 200,
    width: 300,
    borderRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: 200,
    borderRadius: 5,
    marginTop: 15,  
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
