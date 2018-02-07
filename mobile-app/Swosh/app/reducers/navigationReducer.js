
import { NavigationActions } from 'react-navigation';
import LoginNavigator from '../LoginNavigator';

const initialState = LoginNavigator.router.getStateForAction(NavigationActions.init());

export default navigationReducer = (state = initialState, action) => {
  const nextState = LoginNavigator.router.getStateForAction(action, state);
  return nextState || state;
}