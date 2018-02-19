const errorCodes = require('../../constants/errorCodes').errorCodes;
const userExists = require('./simpleRules/userShouldExist');
const userShouldNotKnowOfContact = require('./simpleRules/userShouldNotKNowOfNewContact');
const filePathExists = require('./simpleRules/filePathShouldExist');
const senderKnowOfRecipient = require('./simpleRules/senderShouldHaveContact');
const hasClientInfo = require('./simpleRules/recipientsShouldBeAbleToReceive');
const clientIsARecipient = require('./simpleRules/clientShouldBeARecipient');
const usernameShouldNotBeTaken = require('./simpleRules/usernameCanNotBeOccupied');
const emailIsValid = require('./simpleRules/emailShouldBeValid');
const passwordIsValid = require('./simpleRules/passwordShouldBeValid');
const passwordsMatch = require('./simpleRules/passwordsShouldMatch');
const clientIdIsKnown = require('./simpleRules/clientIdShouldBeKnown');

const usernameCanNotBeOccupied = (possibleEarlierUser) => {
	if (!usernameShouldNotBeTaken(possibleEarlierUser)) {
		throw errorCodes.USERNAME_ALREADY_TAKEN
	} else return true;
}

const emailShouldBeValid = (email) => {
	if (!emailIsValid(email)) {
		throw errorCodes.INVALID_EMAIL
	} else return true;
}

const clientIdShouldBeKnown = (clientId) => {
	if (!clientIdIsKnown(clientId)) {
		console.error('Invalid clientId - ' + clientId + ' - trying to use API');
		throw errorCodes.INVALID_CLIENT_ID;
	} else return true;
}

const passwordShouldBeValid = (password) => {
	if (!passwordIsValid(password)) {
		throw errorCodes.INVALID_PASSWORD;
	} else return true;
}

const passwordsShouldMatch = (receivedPassword, storedPassword) => {
	if (!passwordsMatch(receivedPassword, storedPassword)) {
		throw errorCodes.LOGIN_FAILED;
	} else return true;
} 

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

const givenFilePathShouldExist = (filePath) => {
	if (!filePathExists(filePath)) {
		throw errorCodes.INVALID_IMAGE;
	} else return true;
}

const recipientsShouldBeValid = (sender, recipients) => {
	_senderShouldHaveContacts(sender, recipients);
	//_recipientsShouldBeAbleToReceive(recipients);
	return true;
}

const clientShouldBeARecipient = (client, memory) => {
	if (!clientIsARecipient(client.getGuid(), memory)) {
		throw errorCodes.NOT_ALLOWED_TO_GET_MEMORY;
	} else return true;
}

const _senderShouldHaveContacts = (sender, recipients) => {
	recipients.forEach(recipient => {
		if (!senderKnowOfRecipient(sender, recipient)) {
			throw errorCodes.INVALID_RECIPIENT;
		}
	});
	return true;
}

const _recipientsShouldBeAbleToReceive = (recipients) => {
	recipients.forEach(recipient => {
		if(!hasClientInfo(recipient)) {
			//not implemented
		}
	});
}


module.exports = {
	userAndContactShouldExist,
	usersShouldNotKnowOfNewContact,
	userShouldExist,
	givenFilePathShouldExist,
	recipientsShouldBeValid,
	clientShouldBeARecipient,
	usernameCanNotBeOccupied,
	emailShouldBeValid,
	passwordShouldBeValid,
	passwordsShouldMatch,
	clientIdShouldBeKnown
}