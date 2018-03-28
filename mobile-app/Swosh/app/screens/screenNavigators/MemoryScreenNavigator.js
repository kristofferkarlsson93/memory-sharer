import React from 'react';
import { StackNavigator } from 'react-navigation';
import MemoryScreen from '../MemoriesScreen';
import MemoryDetailsScreen from '../MemoryDetailsScreen'

const navigator = StackNavigator({
	Default: { screen: MemoryScreen, header: null	},
	MemoryScreen: { screen: MemoryScreen, header: null },
	MemoryDetailsScreen: {screen: MemoryDetailsScreen}
});

export default navigator;