import { combineReducers } from 'redux';
import navigation from './navigationReducer';
import createUser from './httpReducers/createUserReducer';
import loginUser from './httpReducers/loginReducer';
import getUserDetails from './httpReducers/getUserDetailsReducer';
import contacts from './httpReducers/contactsReducer';
import memories from './httpReducers/memoriesReducer';

export default combineReducers({
  navigation,
  user: createUser,
  logIn: loginUser,
  userDetails: getUserDetails,
  contacts: contacts,
  memories: memories
});