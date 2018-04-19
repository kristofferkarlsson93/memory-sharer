import { postMemory } from '../actions/actionTypes';

const initialState = {
  imageUri: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case postMemory.MEMORY_IMAGE_SELECTED: 
      return {
        ...state,
        imageUri: action.imageUri
      };
      default:
      return state;
  }
}