import { postMemory } from '../actions/actionTypes';

const initialState = {
  imageUri: '',
  message: ''
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
      default:
      return state;
  }
}