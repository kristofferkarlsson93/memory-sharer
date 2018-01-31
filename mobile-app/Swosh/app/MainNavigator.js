import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation';
import HomeScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Navigator = TabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Swosha',
      tabBarIcon: () => (<Icon size={24} color="white" name="play-arrow" />)
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Jag',
      tabBarIcon: () => (<Icon size={24} color="white" name="person" />)
    },
  }

}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    //showIcon: true,
    //showLabel: true,
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        HomeScreen: {
          barBackgroundColor: '#B2EBF2'
        },
        ProfileScreen: {
          barBackgroundColor: '#B2DFDB'         
        }
      }
    }
  },
  //initialRouteName: 'HomeScreen',
});


export default Navigator;
