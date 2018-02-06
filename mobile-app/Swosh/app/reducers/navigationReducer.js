
import { NavigationActions } from 'react-navigation';
import AppNavigator from '../AppNavigator';

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());

export default navigationReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action);
  return nextState || state;
}