import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import RoundedComponent from '../components/RoundedComponent';
import colors from '../constants/colors';
import { FormLabel, FormInput } from 'react-native-elements'
import RoundedButton from '../components/RoundedButton';
import createUser from '../actions'
//import { RaisedTextButton } from 'react-native-material-buttons';
import Button from 'apsl-react-native-button'

export default class CreateUserScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.submit = this.onSubmit.bind(this);
  }

  onSubmit(username) {

  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.createUserContainer}>
          <Icon size={50} color="white" name="person" />
          <View style={styles.formContainer}>
            <FormLabel><Text style={styles.label}>Välj användarnamn</Text></FormLabel>
            <FormInput 
              inputStyle={styles.input} 
              underlineColorAndroid='transparent'
              onChangeText={ input => this.setState({username: input}) }  
              onSubmitEditing={ _ => this.submit() }
            />
          <Button style={{backgroundColor: 'transparent', borderColor: '#fff', width: 200, alignItems: 'center', justifyContent: 'center', }} textStyle={{fontSize: 18}}>
            <Text style={{color: '#fff', fontSize: 20}}>Skapa användare</Text>
          </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomer: (persnr) => dispatch(fetchCustomerFromAPI(persnr))
  };
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
    height: 250,
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
    width: 200,
    borderRadius: 5,
    marginBottom: 20, 
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  button: {
    borderColor: '#fff',
  }
});
/**
 * 
 * <RaisedTextButton 
            title='Skapa användare'
            color='transparent'
            titleColor='#fff'
            style={styles.button}
            onPress={ _ => this.submit() }
          />
 */
