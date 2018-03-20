import { getAllUserDataActions } from '../../actions/actionTypes';

const initialState = {
  contacts: [],
  isFetching: false,
}
export default (state = initialState, action) => {
  switch(action.type) {
    case getAllUserDataActions.USER_DATA_IS_FETCHED:
      return {
        ...state,
        contacts: action.data.contacts,
      }
    default:
      return state;
  }
}
