import { getAllUserDataActions, fetchMemoryDetails } from '../../actions/actionTypes';

const initialState = {
  memories: [],
  isFetching: false,
  selectedMemory: {},
  error: false,
  errorType: '',
}
export default (state = initialState, action) => {
  switch(action.type) {
    case getAllUserDataActions.USER_DATA_IS_FETCHED:
      return {
        ...state,
        memories: action.data.memories,
      };

    case fetchMemoryDetails.FETCHING_MEMORY_DETAILS_SUCCESS: 
      return {
        ...state,
        selectedMemory: action.selectedMemory
      };
    case fetchMemoryDetails.FETCHING_MEMORY_DETAILS_FAILURE: 
      return {
        ...state,
        error: true,
        errorType: action.error
      }
    default:
      return state;
  }
}
