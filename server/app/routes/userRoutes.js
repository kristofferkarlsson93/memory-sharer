'use strict';

module.exports = (app, db) => {

	app.post('/user', async (request, response) => {
		const addUserController = require('../controllers/users/addUserController.js');
		const result = await addUserController.invoke(request.body);
		response.status(result.status).send(result.body);
	});

	app.post('/user/:userId/contacts/:contactId', (request, response) => {
		const addContactToUserController = require('../controllers/users/addContactToUserController')
		console.log('params', request.params);
		const result = addContactToUserController.invoke(request.params);
		return result;
	});

}