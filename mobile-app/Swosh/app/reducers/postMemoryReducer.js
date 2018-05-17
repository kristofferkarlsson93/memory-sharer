import { postMemory } from '../actions/actionTypes';

const initialState = {
  imageUri: '',
  message: '',
  contactGuids: [],
  isPosting: false,
  error: false,
  errorType: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case postMemory.MEMORY_IMAGE_SELECTED: 
      return {
        ...state,
        imageUri: action.imageUri,
        error: false,
      };
    case postMemory.MEMORY_TEXT_CHANGED:
      return {
        ...state,
        message: action.message,
        error: false,
      };
      case postMemory.CONTACT_ADDED:
        return {
          ...state,
          contactGuids: [...state.contactGuids, action.contactGuid],
          error: false,
        }
      case postMemory.CONTACT_REMOVED: 
        return {
          ...state,
          contactGuids: state.contactGuids.filter(guid => guid !== action.contactGuid),
          error: false,
        }
      case postMemory.POSTING_MEMORY: {
        return {
          ...state,
          isPosting: true,
        }
      }
      case postMemory.POSTING_MEMORY_FAILURE:
        return {
          ...state,
          error: true,
          errorType: action.error,
          isPosting: false
        }
      default:
      return state;
  }
}