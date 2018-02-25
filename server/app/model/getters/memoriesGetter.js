const { Memory } = require('../../objects/Memory');

const db = require('../memoryDb');
const firebaseParser = require('../../helpers/firebaseParser');

const getSingleMemoryByGuid = (guid) => {
  return db.getSingleMemoryByGuid(guid).then(result => firebaseParser.parseMemoryDataToMemoryObject(result));
}
const getAllMemoriesForUser = (guid) => {
  return db.getAllMemoriesForUser(guid)
    .then(result => result ? Object.keys(result) : []
      .map(memory => memory ? new Memory({
        guid: memory,
        filePath: result[memory].filePath,
        message: result[memory].message,
        recipients: result[memory].recipients,
        sender: result[memory].sender
      }) : null));
}

module.exports = {
  getSingleMemoryByGuid,
  getAllMemoriesForUser
}