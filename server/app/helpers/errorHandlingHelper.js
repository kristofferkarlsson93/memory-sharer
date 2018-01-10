const knownErrors = require('../constants/errorCodes');

const isKnownError = (error) => {
	Object.prototype.hasOwnProperty.call(knownErrors, error)
}

module.exports = {
	isKnownError
}