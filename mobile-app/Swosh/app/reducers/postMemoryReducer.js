import { postMemory } from '../actions/actionTypes';

const initialState = {
  imageUri: '',
  message: '',
  contactGuids: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case postMemory.MEMORY_IMAGE_SELECTED: 
      return {
        ...state,
        imageUri: action.imageUri
      };
    case postMemory.MEMORY_TEXT_CHANGED:
      return {
        ...state,
        message: action.message
      };
      case postMemory.CONTACT_ADDED:
        return {
          ...state,
          contactGuids: [...state.contactGuids, action.contactGuid]
        }
      case postMemory.CONTACT_REMOVED: 
        return {
          ...state,
          contactGuid: state.contactGuids.filter(guid => guid !== action.guid)
        }
      default:
      return state;
  }
}