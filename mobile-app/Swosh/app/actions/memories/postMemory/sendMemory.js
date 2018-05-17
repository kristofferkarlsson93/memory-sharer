import { postMemoryToServer } from '../../../services/memoryService';
import { postMemory } from '../../actionTypes';
import knownErrors from '../../../constants/knownErrors';

export const sendMemory = () => {
  return (dispatch, getState) => {
   const { postMemory, logIn } = getState();
   const token = logIn.token;
   const possibleError = checkRequiredParameters();
   if (possibleError) {
     dispatch(failure(possibleError));
     return;
   }
   postMemoryToServer(createRequestBodyData(postMemory), token);
  }
}

const createRequestBodyData = (storedData) => ({
  image: storedData.imageUri,
  recipients: storedData.contactGuids.join(', '),
  message: storedData.message
})

const checkRequiredParameters = (imageUri, contactGuids) => {
  if (!imageUri) return knownErrors.IMAGE_MISSING;
  else if (!contactGuids.length) return knownErrors.RECIPIENTS_MISSING;
  else return;
} 


const sending = () => ({type: postMemory.POSTING_MEMORY});
const success = () => ({type: postMemory.POSTING_MEMORY_SUCCESS});
const failure = (error) => ({type: postMemory.POSTING_MEMORY_FAILURE, error});