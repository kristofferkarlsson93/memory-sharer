import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner'
import MemoryImage from '../components/memory/MemoryImage';

class AddMessageScreen extends React.Component {


  render() {
    console.log(this.props);
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

        </View>
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
  roundedButton: {
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20, 
  },
  imageContainer: {
    flex: 1,
    marginTop: 20
  },
  messageContainer: {
    flex: 2
  }
});

const mapStateToProps = (state) => {
  return {
    pickedImageUri: state.postMemory.imageUri
  }
}

export default connect(mapStateToProps)(AddMessageScreen);