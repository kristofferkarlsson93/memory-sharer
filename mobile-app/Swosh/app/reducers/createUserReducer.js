import { createUserActions } from '../actions/actionTypes';

const initialState = {
  creatingUser: false,
  error: false,
  errorType: '',
  guid: '',
  hasCreatedUser: false,  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case createUserActions.CREATE_USER:
      return {
        ...state,
        creatingUser: true,
        error: false,
        user: action.userObject,
        action: action.type
      }
    case createUserActions.CREATE_USER_SUCCESS:
      return {
        ...state,
        creatingUser: false,
        error: false,
        guid: action.guid,
        hasCreatedUser: true,
        action: action.type
      }
    case createUserActions.CREATE_USER_FAILURE:
      return {
        ...state,
        creatingUser: false,
        error: true,
        errorType: action.error,
        action: action.type
      }
    default: 
      return state;
  }
}