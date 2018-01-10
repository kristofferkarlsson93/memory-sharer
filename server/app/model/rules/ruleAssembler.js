const errorCodes = require('../../constants/errorCodes').errorCodes;
const userExists = require('./simpleRules/userShouldExist');

const userAndContactShouldExist = (user, contact) => {
	if (!userExists(user)) {
			throw errorCodes.USER_DOES_NOT_EXISTS;
	} else if (!userExists(contact)) {
			throw errorCodes.CONTACT_DOES_NOT_EXISTS;
    }
} 

const usersShouldNotBeConnectedWhenAddingContact = (user, contact) => {
}


module.exports = {
	userAndContactShouldExist,
	usersShouldNotBeConnectedWhenAddingContact
}