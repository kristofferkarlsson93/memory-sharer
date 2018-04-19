import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from '../MainScreen';
import AddMessageScreen from '../AddMessageScreen';

const navigator = StackNavigator({
	Default: { screen: MainScreen, header: null	},
	MainScreen: { screen: MainScreen, header: null },
	AddMessageScreen: {screen: AddMessageScreen}
});

export default navigator;