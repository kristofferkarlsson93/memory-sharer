const knownClientIds = require('../../../constants/clientIds');

module.exports = (clientId) => {
  let result = false;
  Object.keys(knownClientIds).forEach(id => {
    if (knownClientIds[id] === clientId) {
      result = true;
    }  
  });
  return result;
} 