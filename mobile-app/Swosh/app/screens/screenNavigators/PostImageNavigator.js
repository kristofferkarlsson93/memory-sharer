import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from '../MainScreen';
import AddMessageScreen from '../AddMessageScreen';
import AddContactsToMemoryScreen from '../AddContactsToMemoryScreen';

const navigator = StackNavigator({
	Default: { screen: MainScreen, header: null	},
	MainScreen: { screen: MainScreen, header: null },
	AddMessageScreen: {screen: AddMessageScreen},
	AddContactsToMemoryScreen: {screen: AddContactsToMemoryScreen}
});

export default navigator;