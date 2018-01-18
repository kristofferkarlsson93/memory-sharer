const fireBaseParser = require('../../helpers/firebaseParser');
const db = require('../memoryDb');

const addMemoryData = (memoryData) => {
  return db.addMemory(fireBaseParser.parseForAddingMemory(data));
}

module.exports = {
  addMemoryData
}