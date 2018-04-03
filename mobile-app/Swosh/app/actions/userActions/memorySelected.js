import { userSelections, fetchMemoryDetails } from '../actionTypes';
import { getContact } from '../../services/contactService';

export const memorySelected = (memory) => {
  return async(dispatch, getState) => {
    const { logIn } = getState();
    const token = logIn.token;
  
    dispatch(contactsIsBeingFetched());
    try {
      const contacts = await Promise.all(memory.recipients.map(guid => getContact(guid, token)));
      const detailedMemory = buildDetailedMemory(memory, contacts);
      dispatch(success(detailedMemory));
    } catch (error) {
      dispatch(failure(error));
    }
  }

}

const buildDetailedMemory = (memory, contacts) => {
  const detailedMemory = Object.assign({}, memory);
  detailedMemory.recipients = contacts;
  return detailedMemory;
}

const selectedMemory = (memoryId) => ({type: userSelections.SELECTED_MEMORY, memoryId});

const contactsIsBeingFetched = () => ({type: fetchMemoryDetails.FETCHING_MEMORY_DETAILS});

const success = (selectedMemory) => ({type: fetchMemoryDetails.FETCHING_MEMORY_DETAILS_SUCCESS, selectedMemory});

const failure = (error) => ({type: fetchMemoryDetails.FETCHING_MEMORY_DETAILS_FAILURE, error});