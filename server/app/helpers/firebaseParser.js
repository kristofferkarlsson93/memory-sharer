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
  const contactFirebaseId = contact.getFirebaseId();
  const contactGuid = contact.getGuid();
  const object = {
    userInfo: {
      userGuid: user.getGuid(),
    }, contactInfo: {

    }
  }
    object['contactInfo'][contact.getGuid()] = true;
    object['contactInfo'][contact.getFirebaseId()] = true;
    return object;
} 

const parseListOfContactGuids = (data) => {
  const relevantData = _extractRelevantData(data);
  //arrayfilter out all guids and add to array
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
  parseListOfContactGuids
}
