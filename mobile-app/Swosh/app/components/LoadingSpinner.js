import React from 'react';
import { StyleSheet, Text, View,  Animated, Easing} from 'react-native';
import colors from '../constants/colors';
import RoundedButton from '../components/RoundedButton';

export default class LoadingSpinner extends React.Component {

  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }  

  componentDidMount () {
    this.spin()
  }  

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>
        <Animated.View style={{transform: [{rotate: spin}]}}>
          <RoundedButton 
            style={styles.roundedButton}
            borderWidth={0}
            borderColor={colors.primaryBorderColor}
            size={150}
            backgroundColor={colors.primaryColor}
            icon={'camera-alt'}
          />
        </Animated.View>
      </View>
    );
  }

 
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
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
  }
});