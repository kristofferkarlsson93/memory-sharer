const knownErrors = require('../constants/errorCodes').errorCodes;

const isKnownError = (error) => {
	return Object.prototype.hasOwnProperty.call(knownErrors, error)
}

module.exports = {
	isKnownError
}