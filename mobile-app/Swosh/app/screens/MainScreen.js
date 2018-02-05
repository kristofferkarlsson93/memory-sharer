import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RoundedButton from '../components/RoundedButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 20}}>
          <RoundedButton 
            style={styles.roundedButton}
            borderWidth={10}
            borderColor={colors.primaryBorderColor}
            size={150}
            backgroundColor={colors.primaryColor}
            icon={'camera-alt'}
          />
        </View>
        <View>
          <RoundedButton 
            style={styles.roundedButton}
            borderWidth={10}
            borderColor={colors.primaryBorderColor}
            size={150}
            backgroundColor={colors.primaryColor}
            icon={'image'}
          />
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
    marginBottom:20    
  }
});
