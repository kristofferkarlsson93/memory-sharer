import { getAllUserDataActions } from './actionTypes';
import { getContactsForUser } from '../services/contactService';
import { getUserInformation } from '../services/userService';
import { getAllMemories } from '../services/memoryService';

export const getAllUserData = (token) => {
  return async(dispatch) => {
    dispatch(gettingData());
    const [user, contacts, memories] = await Promise.all([
      getUserInformation(token), 
      getContactsForUser(token),
      getAllMemories(token)
    ]);
    const data = {
      user,
      contacts,
      memories
    };
    console.log({
      user,
      contacts,
      memories
    })
    dispatch(userDataIsFetched(data));
    /*if (memories.length) {
      Promise.all(userSummary.memories.map(memoryGuid => getMemory(memoryGuid))); //TODO: Create the getMemory function and then fetch images.;
    }*/
    
    
  }
}


const gettingData = () => ({ type: getAllUserDataActions.GETTING_DATA });

const userDataIsFetched = (data) => ({type: getAllUserDataActions.USER_DATA_IS_FETCHED, data});

const gettingDataSuccess = (data) => ({type: getAllUserDataActions.GETTING_DATA_SUCCESS, data});

const gettingDataFailure = (error) => ({type: getAllUserDataActions.GETTING_DATA_FAILURE, error});