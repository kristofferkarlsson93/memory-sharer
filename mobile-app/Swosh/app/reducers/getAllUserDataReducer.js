import { getAllUserDataActions } from '../actions/actionTypes';

const initialState = {
  isFetchingUserData: false,
  hasFetchedSummary: false,
  isFetchingMemories: false,
  summary: {},
  memories: [],
  contacts: [],
  error: false,
  errorType: ''
}


export default (state = initialState, action) => {
  switch (action.type) {
    case getAllUserDataActions.GETTING_DATA:
      return {
        ...state,
        isFetchingUserData: true,
      }
    case getAllUserDataActions.USER_DATA_IS_FETCHED:
      return {
        ...state,
        userInfo: action.data.user,
        contacts: action.data.contacts,
        memories: action.data.memories,
        hasFetchedSummary: true,
        isFetchingMemories: true,
      }
    case getAllUserDataActions.GETTING_DATA_SUCCESS: 
      return {
        ...state,
        memories: action.memories,
        contacts: action.contacts,
        isFetchingMemories: false,
        isFetchingUserData: false
      }
    case getAllUserDataActions.GETTING_DATA_FAILURE: 
      return {
        ...state,
        isFetchingUserData: false,
        isFetchingMemories: false,
        error: true,
        errorType: action.error
      }
    default: 
      return state;

  }
}