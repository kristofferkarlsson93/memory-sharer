import { createUserActions } from '../actions/actionTypes';

const initialState = {
  creatingUser: false,
  error: false,
  errorData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case createUserActions.CREATE_USER:
      return {
        ...state,
        creatingUser: true,
        error: false
      }
    case createUserActions.CREATE_USER_SUCCESS:
      return {
        ...state,
        creatingUser: false,
        error: false,
        guid: action.guid
      }
    case createUserActions.CREATE_USER_FAILURE:
      return {
        ...state,
        creatingUser: false,
        error: true,
        errorData: action.error
      }
    default: 
      return state;
  }
}