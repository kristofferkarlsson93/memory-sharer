import { createUserActions } from './actionTypes';
import { addUser } from '../services/userService';
import { encryptString } from '../utils/passwordCryptator';


export const createUser = (userDraft) => {
  console.log('In createUserAction');
  return (dispatch) => {
    console.log('In createUserAction-return');    
    dispatch(creatingUser(userDraft));
    encryptString(userDraft.password)
    .then(encryptedPassword => {userDraft.password = encryptedPassword; console.log('encrypted',encryptedPassword); return userDraft})
    .then(userObject => addUser(userObject))
    .catch(error => console.log(error));


    console.log('userDraft after hash', userDraft);
    addUser(userDraft);
  }
}

const creatingUser = (userObject) => ({type: createUserActions.CREATE_USER, userObject});

const createUserSuccess = (guid) => ({type: createUserActions.CREATE_USER_SUCCESS, guid});

const createUserFailure = (error) => ({type: createUserActions.CREATE_USER_SUCCESS, error});