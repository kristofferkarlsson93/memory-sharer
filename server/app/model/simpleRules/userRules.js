const userGetter = require('../userGetter');

const userShouldExist = (user) => {
	return !!user;
}

const userShouldNotBeConnectedToContactWhenAdding = (user, contact) => {
	
}


module.exports = {
	userShouldExist,
}