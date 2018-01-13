const db = require('../contactDb');
const firebaseParser = require('../../helpers/firebaseParser');

const addContactToUser = (user, contact) => {
  db.addContactToUser(firebaseParser.parseForAddingContactToUser(user, contact));
}


module.exports = {
  addContactToUser
}