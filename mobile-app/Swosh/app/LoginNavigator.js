import { StackNavigator } from 'react-navigation';
import CreateUserScreen from './screens/CreateUserScreen';
import AppNavigator from './AppNavigator';
import LoginScreen from './screens/LoginScreen';

export default StackNavigator({
  LoginScreen: {screen: LoginScreen},
  CreateUserScreen: {screen: CreateUserScreen},
  MainApp: {screen: AppNavigator}
})