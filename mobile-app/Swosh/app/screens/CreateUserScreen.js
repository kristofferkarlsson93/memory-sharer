import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import { FormLabel, FormInput } from 'react-native-elements'
import { createUser } from '../actions'
import Button from 'apsl-react-native-button'
import knownErrors from '../constants/knownResponseErrors';
import { CheckBox } from 'react-native-elements'
import LoadingScreen from './LoadingScreen';
import Toast, {DURATION} from 'react-native-easy-toast'
import { retrieveUser } from '../localStore/retriever';

class CreateUserScreen extends React.Component {

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
  }

  

  componentDidUpdate(prevProps, prevState) {
    //this.removeAllErrors();
    if (this.props.error && !prevState.errorIsPut) {
      this.addPossibleErrors();
    } 
  }

  addPossibleErrors() {
    switch(this.props.errorType) {
      case knownErrors.USERNAME_ALREADY_TAKEN:
        this.setError('usernameColor', 'Användarnamn upptaget');
        break;
      case knownErrors.INVALID_PASSWORD:
        this.setError('passwordColor', 'Lösenordet måste ha minst 8 tecken');
        break;
      case knownErrors.INVALID_EMAIL:
        this.setError('emailColor', 'Ogiltig epost');
        break;
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
      this.props.createUser(userData);
    } else console.log('wrong');
  }

  checkIfFormHasAllInput() {
    const {username, password, email} =  this.state;
    let hasAllInput = true;
    if (!username) {
      this.setError('usernameColor', 'Användarnamn krävs');
      hasAllInput = false;
    } 
    if (!password) {
      this.setError('passwordColor', 'Lösenord krävs');      
      hasAllInput = false
    } 
    if (!email) {
      this.setError('emailColor', 'Email krävs');
      hasAllInput = false;
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
    if (this.props.user.creatingUser) {
      return (<LoadingScreen/>)
    } 
    else return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
       
        <View style={styles.createUserContainer}>
          <Icon size={50} color={colors.primaryColor} name="person" />
          <View style={styles.formContainer}>
            <FormInput 
              containerRef={component => this.usernameRef = component}
              inputStyle={[styles.input, {borderBottomColor: this.state.usernameColor, color: this.state.usernameColor}]} 
              placeholder='Välj användarnamn'
              placeholderTextColor={colors.primaryColor}
              underlineColorAndroid='transparent'
              onChangeText={ input => this.setState({username: input}) }  
              onSubmitEditing={ _ => this.submit() }
            />
            <FormInput             
              containerRef={component => this.passwordRef = component}            
              inputStyle={[styles.input, {borderBottomColor: this.state.passwordColor, color: this.state.passwordColor}]} 
              placeholder='Välj lösenord'
              placeholderTextColor={colors.primaryColor}
              underlineColorAndroid='transparent'
              onChangeText={ input => this.setState({password: input}) }  
              onSubmitEditing={ _ => this.submit() }
            />
            <FormInput 
              containerRef={component => this.emailRef = component}            
              inputStyle={[styles.input, {borderBottomColor: this.state.emailColor, color: this.state.emailColor}]} 
              placeholder='Ange en epost'
              placeholderTextColor={colors.primaryColor}
              underlineColorAndroid='transparent'
              onChangeText={ input => this.setState({email: input}) }  
              onSubmitEditing={ _ => this.submit() }
            />
            <CheckBox
              style={{backgroundColor: '#fff', marginBottom: 20}}
              textStyle={{color: colors.primaryColor, fontSize: 20, fontWeight: 'normal'}}
              iconType={'material'}
              checkedIcon={'check-box'}
              checkedColor={colors.primaryColor}
              uncheckedIcon={'check-box-outline-blank'}
              title='Håll mig inloggad'
              checked={this.state.keepLoggedIn}
              onPress={() => this.setState({keepLoggedIn: !this.state.keepLoggedIn})}
            />
          <Button style={styles.button} textStyle={{fontSize: 18}} onPress={ _ => this.submit()}>
            <Text style={{color: '#fff', fontSize: 20}}>Skapa användare</Text>
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
    createUser: (userObject) => dispatch(createUser(userObject))
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isCreatingUser: state.user.creatingUser,
    errorType: state.user.errorType,
    error: state.user.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserScreen);

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

//https://github.com/crazycodeboy/react-native-easy-toast