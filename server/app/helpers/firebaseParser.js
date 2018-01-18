const {User} = require('../objects/user');

const parseDataToUser = (data) => {
  const root = _extractRelevantData(data);
  const parsedData = {
    userName: root.userName,
    guid: root.guid,
    id: _getFireBaseIdFromData(data),
    contacts: root.contacts
  };
  return new User(parsedData);
} 

const parseForAddingContactToUser = (user, contact) => {
  const contactGuid = contact.getGuid();
  const object = {
    userInfo: {
      userGuid: user.getGuid(),
    }, contactInfo: {

    }
  }
    object['contactInfo'][contact.getGuid()] = true;
    return object;
} 

const parseListOfContactGuids = (data) => {
  const guids = _extractRelevantData(data);
  const contactGuidList = Object.keys(guids).filter(guid =>  guids[guid] === true);
  return contactGuidList;
}

const parseForAddingMemory = (data) => {
  return {
    sender: data.sender.getGuid(),
    data: {
      recipients: data.recipients,
      message: data.message,
      filePath: data.filePath
    }
  }
}

const _getFireBaseIdFromData = (data) => {
  return Object.keys(data)[0];
}

const _extractRelevantData = (data) => {
  const relevantData = data[Object.keys(data)]
  return relevantData;
}

module.exports = {
  parseDataToUser,
  parseForAddingContactToUser,
  parseListOfContactGuids,
  parseForAddingMemory
}
