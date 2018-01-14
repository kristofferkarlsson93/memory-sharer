const errorCodes = require('../../constants/errorCodes').errorCodes;
const userExists = require('./simpleRules/userShouldExist');
const userShouldNotKnowOfContact = require('./simpleRules/userShouldNotKNowOfNewContact');

const userShouldExist = (user) => {
	if (!userExists(user)) {
		throw errorCodes.USER_DOES_NOT_EXISTS;
	}
}

const userAndContactShouldExist = (user, contact) => {
	if (!userExists(user)) {
			throw errorCodes.USER_DOES_NOT_EXISTS;
	} else if (!userExists(contact)) {
			throw errorCodes.CONTACT_DOES_NOT_EXISTS;
    }
} 

const usersShouldNotKnowOfNewContact = (user, contact) => {
	const userCanBeAdded = userShouldNotKnowOfContact(user, contact);
	if (!userCanBeAdded) {
		throw errorCodes.ALREADY_A_CONTACT;		
	} else return true;
}


module.exports = {
	userAndContactShouldExist,
	usersShouldNotKnowOfNewContact,
	userShouldExist
}