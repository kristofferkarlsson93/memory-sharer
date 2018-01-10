const {User} = require('../objects/user');

const parseDataToUser = (data) => {
  const root = extractUserData(data);
  const parsedData = {
    userName: root.userName,
    guid: root.guid,
    contacts: root.contacts,
    id: getFireBaseIdFromData(data)
  };
  return new User(parsedData);
} 

const getFireBaseIdFromData = (data) => {
  return Object.keys(data)[0];
}

const extractUserData = (data) => {
  return data[Object.keys(data)]
}

module.exports = {
  parseDataToUser
}
