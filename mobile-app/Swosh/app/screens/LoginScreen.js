import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { retrieveUser } from '../localStore/retriever';
import { connect } from 'react-redux';
import { loginUser } from '../actions';


class LoginScreen extends React.Component {
constructor(props) {
  super(props);
  this.checkIfAUserExistsInStore();  
}

checkIfAUserExistsInStore() {
  retrieveUser().then(user => {
    console.log(this.props);
    console.log(user);
    if (user) {
      this.props.loginUser(user);
    }
  })
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
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
    state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
