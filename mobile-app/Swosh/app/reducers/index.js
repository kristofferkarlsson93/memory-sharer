import { combineReducers } from 'redux';
import navigation from './navigationReducer';
import createUser from './createUserReducer';

export default combineReducers({
  navigation,
  user: createUser
});