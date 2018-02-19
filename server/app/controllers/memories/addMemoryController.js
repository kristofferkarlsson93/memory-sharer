const ruleAssembler = require('../../model/rules/ruleAssembler');
const userGetter = require('../../model/getters/userGetter');
const contactGetter = require('../../model/getters/contactsGetter');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;
const errors = require('../../constants/errorCodes');
const controllerHelper = require('../../helpers/controllerHelper');
const {User} = require('../../objects/user');
const memoryPersister = require('../../model/persisters/memoryPersister');

const invoke = async (bodyData, fileData) => {
  console.log('Remember to implement a Ping-function');
  console.log('Remember to check that recipients has client-info');
  const recipientsGuids = bodyData.recipients.replace(/\s/g, "").split(',');
  const [sender, senderContacts, recipients] = await getUsers(bodyData.sender, recipientsGuids);
  sender.setContacts(senderContacts);
  data = getFormatedData(bodyData, fileData, sender, recipientsGuids);

  try {
    applyRules(sender, recipients, fileData.path);
  } catch(error) {
    if (isKnownError(error)) {
      if (hasSpecialTreatment(error)) {
        data.recipients = getOkGuids(recipientsGuids, recipients);
        
      } else {
        return controllerHelper.errorResponse(errors.errorStatuses[error], error.errorCodes[error]); 
      }
    }
  }
  memoryPersister.addMemoryData(data);
  pingRecipients(recipients);
  const failedRecipients = getGuidThatCouldNotBeSentTo(recipientsGuids, data.recipients);
  return controllerHelper.successResponse(200, {failedToSendTo: failedRecipients} );
}

const pingRecipients = (recipients) => {
  
}

const getOkGuids = (recipientsGuid, recipients) => {
  return recipientsGuid.filter( (guid, i) => (recipients[i] instanceof User && recipients[i].hasClientInfo()));
}

const getGuidThatCouldNotBeSentTo = (requestedRecipientGuids, actualRecipientGuids) => {
  return requestedRecipientGuids.filter( (guid, i) => actualRecipientGuids.indexOf(guid) === -1);
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

const getFormatedData = (bodyData, fileData, sender, recipientsGuids) => {
  return {
    sender: sender,
    guid: fileData.filename.split('.')[0],
    recipients: recipientsGuids,
    message: bodyData.message ? bodyData.message : '',
    filePath: fileData.path
  };
}

module.exports = {invoke};

/**
 * Sender and recipients should be contacts,
 * recipient should be able to ,
 * What happens if one of the recipients cannot be found?
 */