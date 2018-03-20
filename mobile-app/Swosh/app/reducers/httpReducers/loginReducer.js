import { loginUserActions } from '../../actions/actionTypes';

const initialState = {
  loggedIn: false,
  loggingIn: false,
  token: '',
  user: {},
  error: false,
  errorType: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case loginUserActions.LOGIN_USER:
      return {
        ...state,
        loggingIn: true,
        user: action.user
      }
    case loginUserActions.LOGIN_USER_SUCCESS: 
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        token: action.token
      }
    case loginUserActions.LOGIN_USER_FAILURE:
      return {
        ...state,
        error: true,
        errorType: action.error,
        loggingIn: false,        
      }
    default: 
    return state;
  }
}