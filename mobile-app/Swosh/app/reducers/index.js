import { combineReducers } from 'redux';
import navigation from './navigationReducer';
import createUser from './createUserReducer';
import loginUser from './loginReducer';

export default combineReducers({
  navigation,
  user: createUser,
  logIn: loginUser
});