const db = require('../contactDb');
const firbaseParser = require('../../helpers/firebaseParser');

const getContactsByGuid = (userGuid) => {
  return db.getContactsByGuid(userGuid).then(result => {
    if(!result) {
      return [];
    }
    return firbaseParser.parseListOfContactGuids(result);
  });
}

module.exports = {
  getContactsByGuid
}