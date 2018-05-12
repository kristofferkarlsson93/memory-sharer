import { postMemoryToServer } from '../../../services/memoryService';

export const sendMemory = () => {
  return (dispatch, getState) => {
   const { postMemory } = getState();
   if (!postMemory.imageUri || !postMemory.contactGuids.length) {
     console.log('missing values, Fix this error managment');
   }
   const postObject = {
     image: postMemory.imageUri,
     recipients: postMemory.contactGuids.join(', '),
     message: postMemory.imageUri
   }
   console.log('To post', postObject);
   postMemoryToServer(postObject);
  }
}