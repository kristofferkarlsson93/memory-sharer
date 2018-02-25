import { StackNavigator } from 'react-navigation';
import CreateUserScreen from './screens/CreateUserScreen';
import AppNavigator from './AppNavigator';
import LoginScreen from './screens/LoginScreen';

export default StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    header: null
  },
  CreateUserScreen: {
    screen: CreateUserScreen, 
    header: null
  },
  MainApp: {
    screen: AppNavigator
  }
});