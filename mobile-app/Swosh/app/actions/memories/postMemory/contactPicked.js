import { postMemory } from '../../actionTypes';

export const contactPicked = (contactGuid) => {
  return (dispatch, getState) => {
   const { postMemory } = getState();
   const earlierAddedContacts = postMemory.contactGuids;

  if (earlierAddedContacts.includes(contactGuid)) {
    console.log('remove');
    dispatch(remove(contactGuid));
  } else {
    dispatch(add(contactGuid));
  }
   
  }
}

const add = (contactGuid) => ({type: postMemory.CONTACT_ADDED, contactGuid});

const remove = (contactGuid) => ({type: postMemory.CONTACT_REMOVED, contactGuid});