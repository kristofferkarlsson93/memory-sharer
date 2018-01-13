const db = require('../contactDb');
const firbaseParser = require('../../helpers/firebaseParser');

const getContactsForUser = (user) => {
  return db.getContactsForUser(user).then(result => {
    return firbaseParser.parseListOfContactIds(result);
  });
}

module.exports = {
  getContactsForUser
}