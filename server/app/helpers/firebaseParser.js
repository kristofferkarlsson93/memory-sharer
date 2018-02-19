const {User} = require('../objects/user');
const { Memory } = require('../objects/Memory');

const parseDataToUser = (data) => {
  const root = _extractRelevantData(data);
  const parsedData = {
    userName: root.username,
    guid: root.guid,
    id: _getFireBaseIdFromData(data),
    password: root.password,
    contacts: root.contacts
  };
  return new User(parsedData);
} 

const parseDataToCreateUser = (guid, username, email, password) => {
  return {
    guid,
    username,
    email,
    password
  }
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
  const object = {};
  object[data.guid] = {
    sender: data.sender.getGuid(),    
    recipients: data.recipients,
    message: data.message,
    filePath: data.filePath
  } 
  return object;
}

const parseMemoryDataToMemoryObject = (firebaseMemoryData) => {
  if (firebaseMemoryData) {
    const relevantData = _extractRelevantData(firebaseMemoryData);
    return new Memory({
      guid: _getFireBaseIdFromData(firebaseMemoryData),
      filePath: relevantData.filePath,
      message: relevantData.message,
      recipients: relevantData.recipients,
      sender: relevantData.sender,
    });
  } else return '';
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
  parseDataToCreateUser,
  parseForAddingContactToUser,
  parseListOfContactGuids,
  parseForAddingMemory,
  parseMemoryDataToMemoryObject
}
