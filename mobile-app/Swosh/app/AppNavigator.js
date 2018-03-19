import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation';
import HomeScreen from './screens/MainScreen';
import MemoriesScreen from './screens/MemoriesScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './constants/colors';
import LoadingScreen from './screens/LoadingScreen';
import ContactScreen from './screens/ContactsScreen'

const Navigator = TabNavigator({

  ContactScreen: {
    screen: ContactScreen,
    navigationOptions: {
      tabBarLabel: 'Kontakter',
      tabBarIcon: () => (<Icon size={24} color={colors.primaryColor} name="group" />),
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
  MemoriesScreen: {
    screen: MemoriesScreen,
    navigationOptions: {
      tabBarLabel: 'Skickat',
      tabBarIcon: () => (<Icon size={24} color={colors.primaryColor} name="camera-roll" />),
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
        MemoriesScreen: {
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
  initialRouteName: 'MemoriesScreen',
});

export default Navigator;
