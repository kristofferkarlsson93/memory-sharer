import { createUserActions } from './actionTypes';
import { addUserToServer } from '../services/userService';
import { encryptString } from '../utils/passwordCryptator';
import knownErrors from '../constants/knownErrors';
import { storeUser } from '../localStore/persister';


export const createUser = (userDraft) => {
  return async (dispatch) => {
    try {
      dispatch(creatingUser(userDraft));
      const data = await addUserToServer(userDraft);
      await storeUser({
        username: userDraft.username,
        password: userDraft.password,
        email: userDraft.email
      });
      dispatch(createUserSuccess(data.guid));
      
    } catch(error) {
      dispatch(createUserFailure(error));
    }

  }
}

const creatingUser = (userObject) => ({type: createUserActions.CREATE_USER, userObject});

const createUserSuccess = (guid) => ({type: createUserActions.CREATE_USER_SUCCESS, guid});

const createUserFailure = (error) => ({type: createUserActions.CREATE_USER_FAILURE, error});