import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView} from 'react-native';

export default class LargeTextInput extends React.Component {

  
  render() {  
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <TextInput 
          style={{height: 100, width: 300, fontSize: 20}}
          value={this.props.value}
          onChangeText={(text) => this.props.onChangeText(text)}
          onSubmit={() => this.props.onSubmitEditing()}
          multiline={true}
          placeholder={this.props.placeholder}
        />
      </KeyboardAvoidingView>
    );
  }

  onSubmit() {

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