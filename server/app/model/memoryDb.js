const memoriesRef = require('../configs/dbConfig').memoriesRef;

const addMemory = (data) => {
  memoriesRef.update(data);
}

const getSingleMemoryByGuid = (memoryGuid) => {
  return new Promise( (resolve, reject) => {
		memoriesRef.orderByKey().equalTo(memoryGuid).once('value', snapshot => {
			resolve(snapshot.val());
		});
	});
}

const getAllMemoriesForUser = (userGuid) => {
  return new Promise( (resolve, reject) => {
		memoriesRef.orderByChild('sender').equalTo(userGuid).on('value', snapshot => {
			resolve(snapshot.val());
		});
	});
}

module.exports = {
  addMemory,
  getSingleMemoryByGuid,
  getAllMemoriesForUser
}