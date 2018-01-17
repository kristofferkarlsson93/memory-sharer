const ruleAssembler = require('../../model/rules/ruleAssembler');
const userGetter = require('../../model/getters/userGetter');
const contactGetter = require('../../model/getters/contactsGetter');


const invoke = async (bodyData, fileData) => {
  
  const recipientsGuids = bodyData.recipients.replace(/\s/g, "").split(',');
  const [sender, senderContacts, recipients] = await getUsers(bodyData.sender, recipientsGuids);
  sender.setContacts(senderContacts);

   try {
     ruleAssembler.givenFilePathShouldExist(fileData.path);
   } catch(error) {
     console.log('ERROR', error);
   }
}

const getUsers = (sender, recipients) => {
  return Promise.all([
    userGetter.getUserByGuid(sender),
    contactGetter.getContactsByGuid(sender),
    Promise.all(recipients.map(recipient => userGetter.getUserByGuid(recipient)))
  ]);
}

module.exports = {invoke};

/**
 * Sender and recipients should be contacts,
 * recipient should be able to recive,
 * What happens if one of the recipients cannot be found?
 */