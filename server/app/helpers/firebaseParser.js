const {User} = require('../objects/user');

const parseDataToUser = (data) => {
  const root = extractUserData(data);
  const parsedData = {
    userName: root.userName,
    guid: root.guid,
    id: getFireBaseIdFromData(data),
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

const getFireBaseIdFromData = (data) => {
  return Object.keys(data)[0];
}

const extractUserData = (data) => {
  return data[Object.keys(data)]
}

module.exports = {
  parseDataToUser,
  parseForAddingContactToUser
}
