import { postMemory } from '../../actionTypes';

export const memoryTextChanged = (text) => {
  return (dispatch) => {
    console.log('text in action', text);
    if (!text) {
      //dispatch error
    } else {
      dispatch(change(text));
    }
  }
}

const change = (message) => ({type: postMemory.MEMORY_TEXT_CHANGED, message});