const userGetter = require('../userGetter');

const userShouldExist = (userGuid) => {
	return userGetter.userGuidExists(userGuid).then((result) => {
		return result;
	});
}


module.exports = {
	userShouldExist,
}