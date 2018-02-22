import { loginUserActions } from './actionTypes';
import { loginUserOnAPIByUsername } from '../services/userService';
import { storeUser } from '../localStore/persister';

export const loginUser = (userObject) => {
  return async (dispatch) => {
    try {
      dispatch(loggingInUser(userObject));
      const token = await loginUserOnAPIByUsername(userObject);
      console.log('response sucess', token);
      storeUser({
        username: userObject.username,
        password: userObject.password,
        email: userObject.email
      });
      dispatch(loginUserSuccess(token));
      
    } catch(error) {
      dispatch(loginUserFailure(error));
    }
  }
}

const loggingInUser = (user) => ({type: loginUserActions.LOGIN_USER, user});

const loginUserSuccess = (token) => ({type: loginUserActions.LOGIN_USER_SUCCESS, token});

const loginUserFailure = (error) => ({type: loginUserActions.LOGIN_USER_FAILURE, error});
