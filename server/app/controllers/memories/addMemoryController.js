const ruleAssembler = require('../../model/rules/ruleAssembler');
const userGetter = require('../../model/getters/userGetter');
const contactGetter = require('../../model/getters/contactsGetter');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;
const errors = require('../../constants/errorCodes');
const controllerHelper = require('../../helpers/controllerHelper');
const {User} = require('../../objects/user');
const memoryPersister = require('../../model/persisters/memoryPersister');

const invoke = async (bodyData, fileData) => {
  
  const recipientsGuids = bodyData.recipients.replace(/\s/g, "").split(',');
  const [sender, senderContacts, recipients] = await getUsers(bodyData.sender, recipientsGuids);
  sender.setContacts(senderContacts);
  console.log('bodyDataMeds', bodyData.message);

  data = {
    sender: sender,
    recipients: recipientsGuids,
    message: bodyData.message ? bodyData.message : '',
    filePath: fileData.path
  }

  try {
    applyRules(sender, recipients, fileData.path);
  } catch(error) {
    console.log('ERROR', error);
    if (isKnownError(error)) {
      if (hasSpecialTreatment(error)) {
        data.recipients = getOkGuids(recipientsGuids, recipients);
        
      } else {
        return controllerHelper.errorResponse(errors.errorStatuses[error], error.errorCodes[error]); 
      }
    }
  }
  memoryPersister.addMemoryData(data);
}

const getOkGuids = (recipientsGuid, recipients) => {
  return recipientsGuid.filter( (guid, i) => (recipients[i] instanceof User && recipients[i].hasClientInfo()));
  
}

const applyRules = (sender, recipients, filePath) => {
  ruleAssembler.givenFilePathShouldExist(filePath);
  ruleAssembler.userShouldExist(sender);
  ruleAssembler.recipientsShouldBeValid(sender, recipients);
}
 
const getUsers = (sender, recipients) => {
  return Promise.all([
    userGetter.getUserByGuid(sender),
    contactGetter.getContactsByGuid(sender),
    Promise.all(recipients.map(recipient => userGetter.getUserByGuid(recipient)))
  ]);
}

const hasSpecialTreatment = (error) => {
   return (error === errors.errorCodes.INVALID_RECIPIENT)
}

module.exports = {invoke};

/**
 * Sender and recipients should be contacts,
 * recipient should be able to ,
 * What happens if one of the recipients cannot be found?
 */