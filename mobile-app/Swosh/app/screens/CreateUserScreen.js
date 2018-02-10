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
      username: '',
      password: '',
      email: '',
      usernameColor: colors.primaryColor,
      passwordColor: colors.primaryColor,
      emailColor: colors.primaryColor
    }
    this.submit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log('submit');
    this.checkIfFormHasAllInput();
  }

  setInputLineColor(hasError) {
    if (hasError) {
      return colors.error
    } else return colors.primaryColor;
  }

  checkIfFormHasAllInput() {
    const {username, password, email} =  this.state;
    console.log(!username);
    let hasAllInput = true;
    if (!username) {
      this.setError('usernameColor');
      hasAllInput = false;
    } 
    if (!password) {
      this.setError('passwordColor');      
      hasAllInput = false
    } 
    if (!email) {
      this.setError('emailColor');
      hasAllInput = false;
    }
    return hasAllInput;
  }

  setError(colorState) {
    console.log('volor', colorState);
    this.setState({[colorState]: colors.error});
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.createUserContainer}>
          <Icon size={50} color={colors.primaryColor} name="person" />
          <View style={styles.formContainer}>
            <FormInput 
              containerRef={component => this.usernameRef = component}
              inputStyle={[styles.input, {borderBottomColor: this.state.usernameColor}]} 
              placeholder='Välj användarnamn'
              placeholderTextColor={colors.primaryColor}
              underlineColorAndroid='transparent'
              onChangeText={ input => this.setState({username: input}) }  
              onSubmitEditing={ _ => this.submit() }
            />
            <FormInput 
              containerRef={component => this.passwordRef = component}            
              inputStyle={[styles.input, {borderBottomColor: this.state.passwordColor}]} 
              placeholder='Välj lösenord'
              placeholderTextColor={colors.primaryColor}
              underlineColorAndroid='transparent'
              onChangeText={ input => this.setState({password: input}) }  
              onSubmitEditing={ _ => this.submit() }
            />
            <FormInput 
              containerRef={component => this.emailRef = component}            
              inputStyle={[styles.input, {borderBottomColor: this.state.emailColor}]} 
              placeholder='Ange en epost'
              placeholderTextColor={colors.primaryColor}
              underlineColorAndroid='transparent'
              onChangeText={ input => this.setState({email: input}) }  
              onSubmitEditing={ _ => this.submit() }
            />
          <Button style={styles.button} textStyle={{fontSize: 18}} onPress={ _ => this.submit()}>
            <Text style={{color: colors.primaryColor, fontSize: 20}}>Skapa användare</Text>
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
    padding: 20,
    backgroundColor: '#fff',
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
    color: colors.primaryColor,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'transparent', 
    borderColor: colors.primaryColor, 
    width: 200, 
    marginLeft: 17
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
