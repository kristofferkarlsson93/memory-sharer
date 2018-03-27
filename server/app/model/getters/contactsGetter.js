const db = require('../contactDb');
const firebaseParser = require('../../helpers/firebaseParser');

const getContactsByGuid = (userGuid) => {
  return db.getContactsByGuid(userGuid).then(result => {
    if(!result) {
      return [];
    }
    return firebaseParser.parseListOfContactGuids(result);
  });
}

module.exports = {
  getContactsByGuid
}