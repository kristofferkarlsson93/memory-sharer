import React from 'react';
import { BackHandler } from 'react-native';
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import LoginNavigator from './LoginNavigator';

export default class ReduxNavigation extends React.Component {

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  //Makes it possible to use the back-button in android
  onBackPress = () => {
    const { dispatch, navigation } = this.props;
    if (navigation.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, navigation } = this.props;
    return <LoginNavigator
      navigation={addNavigationHelpers({
        dispatch,
        state: navigation
      })}/>
  }
}