import {editUserAction} from './actionTypes';

export const createUser = (userDraft) => {
  
}

const creatUser = (username) => ({type: editUserAction.CREATE_USER, username});

const createUserSuccess = (user) => ({type: editUserAction.CREATE_USER_SUCCESS, user});

const createUserFailure = (error) => ({type: editUserAction.CREATE_USER_SUCCESS, error});