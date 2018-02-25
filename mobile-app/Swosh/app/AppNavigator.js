import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation';
import HomeScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './constants/colors';
import LoadingScreen from './screens/LoadingScreen';

const Navigator = TabNavigator({

  LoadingScreen: {
    screen: LoadingScreen,
    navigationOptions: {
      tabBarLabel: 'Placeholder',
      tabBarIcon: () => (<Icon size={24} color={colors.primaryColor} name="bookmark" />),
      header: null
    },
  },  
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Swosha',
      tabBarIcon: () => (<Icon size={24} color={colors.primaryColor} name="play-arrow" />),
      header: null
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Jag',
      tabBarIcon: () => (<Icon size={24} color={colors.primaryColor} name="person" />),
      header: null      
    },
  },

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
      elevation: 8,
      tabs: {
        HomeScreen: {
          barBackgroundColor: '#fff',
          activeLabelColor: colors.primaryColor          
        },
        ProfileScreen: {
          barBackgroundColor: '#fff',
          activeLabelColor: colors.primaryColor
        },
        LoadingScreen: {
          barBackgroundColor: '#fff',
          activeLabelColor: colors.primaryColor          
        },
      }
    }
  },
  initialRouteName: 'ProfileScreen',
});


export default Navigator;
