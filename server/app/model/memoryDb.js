const memoriesRef = require('../configs/dbConfig').memoriesRef;

const addMemory = (data) => {
  const senderRef = memoriesRef.child(data.sender);
  console.log(data);
  senderRef.update(data.data);
}

module.exports = {
  addMemory
}