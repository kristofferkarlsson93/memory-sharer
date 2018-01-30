import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Navigator = TabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Swosha hälsning',
      tabBarIcon: () => <Icon size={28} color="white" name="play-arrow" />
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Mina swosh',
      tabBarIcon: () => <Icon size={28} color="white" name="person" />
    },
  }

}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showIcon: true,
    showLabel: false,
  },
  initialRouteName: 'HomeScreen',
}
);


export default Navigator;
