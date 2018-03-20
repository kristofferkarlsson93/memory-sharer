import { getAllUserDataActions } from '../../actions/actionTypes';

const initialState = {
  memories: [],
  isFetching: false,
}
export default (state = initialState, action) => {
  switch(action.type) {
    case getAllUserDataActions.USER_DATA_IS_FETCHED:
      return {
        ...state,
        memories: action.data.memories,
      }
    default:
      return state;
  }
}
