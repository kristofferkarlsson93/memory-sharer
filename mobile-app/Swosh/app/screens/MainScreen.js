import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  Button, Image } from 'react-native';
import { connect } from 'react-redux';
import RoundedButton from '../components/RoundedButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import { ImagePicker } from 'expo';
import { getAllUserData } from '../actions';

class MainScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
    console.log(this.props);
    this.props.getUserData(this.props.token);
  }
  
    render() {
      let { image } = this.state;
  
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
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>

      );
    }
  
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      //aspect: [4, 3], 
      base64: true,

    });


    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const mapStateToProps = (state) => {
  //console.log('STATE', state);
  return {
    token: state.logIn.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (token) => dispatch(getAllUserData(token))
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



/** 
 *     return (
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
          />
        </View>
      </View>
    );
 * 
*/