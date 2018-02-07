import { StackNavigator } from 'react-navigation';
import CreateUserScreen from './screens/CreateUserScreen';
import AppNavigator from './AppNavigator';

export default StackNavigator({
  CreateUserScreen: {screen: CreateUserScreen},
  MainApp: {screen: AppNavigator}
})