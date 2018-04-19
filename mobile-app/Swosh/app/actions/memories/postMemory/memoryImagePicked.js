import { postMemory } from '../../actionTypes';


export const memoryImagePicked = (imageUri) => {
  return async(dispatch, getState) => {
    dispatch(memoryImageSelected(imageUri));
  }
}

const memoryImageSelected = (imageUri) => ({type: postMemory.MEMORY_IMAGE_SELECTED, imageUri});