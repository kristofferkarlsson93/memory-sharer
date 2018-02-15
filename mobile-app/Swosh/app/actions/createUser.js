import { createUserActions } from './actionTypes';
import { addUser } from '../services/userService';
import { encryptString } from '../utils/passwordCryptator';
import knownErrors from '../constants/knownResponseErrors';


export const createUser = (userDraft) => {
  return (dispatch) => {
    dispatch(creatingUser(userDraft));
    addUser(userDraft)
    .then(data => dispatch(createUserSuccess(data.guid)))
    .catch(error => dispatch(createUserFailure(error)));
  }
}

const creatingUser = (userObject) => ({type: createUserActions.CREATE_USER, userObject});

const createUserSuccess = (guid) => ({type: createUserActions.CREATE_USER_SUCCESS, guid});

const createUserFailure = (error) => ({type: createUserActions.CREATE_USER_FAILURE, error});