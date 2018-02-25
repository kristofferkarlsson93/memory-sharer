import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { retrieveUser } from '../localStore/retriever';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import LoadingScreen from'./LoadingScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import { FormLabel, FormInput } from 'react-native-elements'
import Button from 'apsl-react-native-button'
import Toast, {DURATION} from 'react-native-easy-toast'
import { isKnownError } from '../utils/errorUtils';


class LoginScreen extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    username: 'KurtOlsson',
    password: 'NissePIsKing',
    email: 'email@test.se',
    keepLoggedIn: true,
    usernameColor: colors.primaryColor,
    passwordColor: colors.primaryColor,
    emailColor: colors.primaryColor,
    errorIsPut: false
  }
  this.submit = this.onSubmit.bind(this);
  this.checkIfAUserExistsInStore();  
}

checkIfAUserExistsInStore() {
  retrieveUser()
  .then(user => {
    if (user) {
      this.props.loginUser(user);
    }
  })
}

componentDidUpdate(prevProps, prevState) {
  if (this.props.error && !this.state.errorIsPut) {
    if (isKnownError(this.props.errorType)) {
      this.setError('passwordColor', '');
      this.setError('usernameColor', 'Ogiltiga inloggningsuppgifter');
    } else {
      this.setError('passwordColor', '');
      this.setError('usernameColor', 'Det verkar vara ett tekniskt fel just nu. Försök igen senare')
    }
  } else if (this.props.logIn.loggedIn) {
    this.props.navigation.navigate('MainApp');
  }
}

onSubmit() {
  if (this.checkIfFormHasAllInput()) {
    this.removeAllErrors();
    userData = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      keepLoggedIn: this.state.keepLoggedIn
    };
    this.props.loginUser(userData);
  } else console.log('wrong');
}

checkIfFormHasAllInput() {
  const {username, password, email} =  this.state;
  let hasAllInput = true;
  if (!username) {
    this.setError('usernameColor', 'användarnamn krävs');
    hasAllInput = false;
  } 
  if (!password) {
    this.setError('passwordColor', 'Lösenord krävs');      
    hasAllInput = false
  }
  return hasAllInput;
}

setError(colorState, displayMessage) {
  this.refs.toast.show(displayMessage, DURATION.LENGTH_LONG);    
  this.setState({[colorState]: colors.error, errorIsPut: true});
}

removeAllErrors() {
  this.setState({
    usernameColor: colors.primaryColor,
    passwordColor: colors.primaryColor,
    emailColor: colors.primaryColor,
  });
}

  render() {
    if (this.props.logIn.loggingIn) {
      return <LoadingScreen/>
    }
    else return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
       <View style={styles.createUserContainer}>
          <Icon size={50} color={colors.primaryColor} name="person" />
          <View style={styles.formContainer}>
            <FormInput 
              containerRef={component => this.usernameRef = component}
              inputStyle={[styles.input, {borderBottomColor: this.state.usernameColor, color: this.state.usernameColor}]} 
              placeholder='Ange användarnamn'
              placeholderTextColor={colors.primaryColor}
              underlineColorAndroid='transparent'
              onChangeText={ input => this.setState({username: input}) }  
              onSubmitEditing={ _ => this.submit() }
            />
            <FormInput             
              containerRef={component => this.passwordRef = component}            
              inputStyle={[styles.input, {borderBottomColor: this.state.passwordColor, color: this.state.passwordColor}]} 
              placeholder='Ange lösenord'
              placeholderTextColor={colors.primaryColor}
              underlineColorAndroid='transparent'
              onChangeText={ input => this.setState({password: input}) }  
              onSubmitEditing={ _ => this.submit() }
            />
            <Button style={styles.button} textStyle={{fontSize: 18}} onPress={ _ => this.submit()}>
              <Text style={{color: '#fff', fontSize: 20}}>Logga in</Text>
            </Button>
          </View>
        </View>
        <Toast
          ref="toast"
          style={{backgroundColor: colors.error, width: 300, marginBottom: 15, }}
          position='top'
          positionValue={15}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{color: '#fff', fontSize: 20, opacity: 1}}
        />
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user))
  };
}

const mapStateToProps = (state) => {
  return {
    logIn: state.logIn,
    error: state.logIn.error,
    errorType: state.logIn.errorType
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.primaryColor, 
    borderColor: colors.primaryColor,
    width: 200, 
    marginLeft: 17
  }
});
