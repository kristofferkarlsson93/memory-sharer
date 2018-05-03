import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner'
import MemoryImage from '../components/memory/MemoryImage';
import LargeTextInput from '../components/LargeTextInput';
import { memoryTextChanged } from '../actions'

class AddMessageScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <MemoryImage 
            filePath={this.props.pickedImageUri}
            height={250}
            width={300}
          />
        </View>
        <View style={styles.messageContainer} >
          <LargeTextInput 
            value={this.props.storedMessage}
            onChangeText={(text) => this.props.onTextChanged(text)}
            onSubmit={(message) => this.onSubmitMessage(message)}
          />
        </View>
      </View>
    );
  }

  onSubmitMessage(message) {
    
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },
  imageContainer: {
    //flex: 1,
    marginTop: 20
  },
  messageContainer: {
    flex: 2
  }
});

const mapStateToProps = (state) => {
  return {
    pickedImageUri: state.postMemory.imageUri,
    storedMessage: state.postMemory.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChanged: (text) => dispatch(memoryTextChanged(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMessageScreen);