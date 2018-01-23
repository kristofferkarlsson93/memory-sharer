const db = require('../memoryDb');
const firebaseParser = require('../../helpers/firebaseParser');

const getSingleMemoryByGuid = (guid) => {
  return db.getSingleMemoryByGuid(guid).then(result => firebaseParser.parseMemoryDataToMemoryObject(result));
}

module.exports = {
  getSingleMemoryByGuid
}