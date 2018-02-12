import { createUserActions } from './actionTypes';
import { addUser } from '../services/userService';

export const createUser = (userDraft) => {
  console.log('In createUserAction');
  return (dispatch) => {
    console.log('In createUserAction-return');    
    dispatch(creatingUser(userDraft));
    addUser(userDraft);
  }
}

const creatingUser = (userObject) => ({type: createUserActions.CREATE_USER, userObject});

const createUserSuccess = (guid) => ({type: createUserActions.CREATE_USER_SUCCESS, guid});

const createUserFailure = (error) => ({type: createUserActions.CREATE_USER_SUCCESS, error});