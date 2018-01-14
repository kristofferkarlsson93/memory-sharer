const db = require('../contactDb');
const firbaseParser = require('../../helpers/firebaseParser');

const getContactsByGuid = (userGuid) => {
  return db.getContactsByGuid(userGuid).then(result => {
    return firbaseParser.parseListOfContactGuids(result);
  });
}

module.exports = {
  getContactsByGuid
}