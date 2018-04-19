import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  Button, Image } from 'react-native';
import { connect } from 'react-redux';
import RoundedButton from '../components/RoundedButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import { ImagePicker } from 'expo';
import { getAllUserData } from '../actions';
import { memoryImagePicked } from '../actions';

class MainScreen extends React.Component {

  constructor(props) {
    super(props);
    this.props.getUserData(this.props.token);
  }
  
    render() {
  
      return (
        <View style={styles.container}>
        <View style={{marginBottom: 30}}>
          <RoundedButton 
            style={styles.roundedButton}
            borderWidth={0}
            borderColor={colors.primaryBorderColor}
            size={150}
            backgroundColor={colors.primaryColor}
            icon={'camera-alt'}
          />
        </View>
        <View>
          <RoundedButton 
            style={styles.roundedButton}
            borderWidth={0}
            borderColor={colors.primaryBorderColor}
            size={150}
            backgroundColor={colors.primaryColor}
            icon={'image'}
            onPress={this.pickImage}            
          />
        </View>
      </View>

      );
    }
  
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      //aspect: [4, 3], 
      base64: true,
    });

    //console.log(this.props);
    if (!result.cancelled) {
      this.props.onMemoryImagePicked(result.uri);
      this.props.navigation.navigate('AddMessageScreen');
    }
  };
}

const mapStateToProps = (state) => {
  return {
    token: state.logIn.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (token) => dispatch(getAllUserData(token)),
    onMemoryImagePicked: (imageUri) => dispatch(memoryImagePicked(imageUri))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

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
    marginBottom:20    
  }
});
