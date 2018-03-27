import { userSelections, fetchMemoryDetails } from '../actionTypes';
import { getContact } from '../../services/contactService';

export const memorySelected = (memory) => {
  return async(dispatch, getState) => {
    const { logIn } = getState();
    const token = logIn.token;
    console.log('memory', memory);
  
    dispatch(contactsIsBeingFetched());
    try {
      const contacts = await Promise.all(memory.recipients.map(guid => getContact(guid, token)));
      console.log('contacts oso', contacts);
      dispatch(success(contacts));
    } catch (error) {
      dispatch(failure(error));
    }


  }

}

const selectedMemory = (memoryId) => ({type: userSelections.SELECTED_MEMORY, memoryId});

const contactsIsBeingFetched = () => ({type: fetchMemoryDetails.FETCHING_CONTACT_DETAILS});

const success = (contacts) => ({type: fetchMemoryDetails.FETCHING_CONTACT_DETAILS_SUCCESS, contacts});

const failure = (error) => ({type: fetchMemoryDetails.FETCHING_CONTACT_DETAILS_FAILURE, error});