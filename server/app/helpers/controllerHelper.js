'use strict';

const allParametersExists = (data, requiredParameters) => {
   
}

const errorResponse = (status, code) => {
	return {
		status: status,
		body: {
			error: {
				code: code
			}
		}
	};
}

const successResponse = (status, json) => {
	return {
		status: status,
		body: json
	}
}

const keyExists = (data, key) => {
	return Object.prototype.hasOwnProperty.call(data, key)
}

module.exports = {
	allParametersExists,
	errorResponse,
	successResponse,
};