'use strict';

module.exports = (app, db) => {

	app.post('/user', async(request, response) => {
		const addUserController = require('../controllers/users/addUserController.js');
		const result = await addUserController.invoke(request.body);
		response.status(result.status).send(result.body);
	});

	app.post('/user/:userGuid/contacts/:contactGuid', async(request, response) => {
		const addContactToUserController = require('../controllers/users/addContactToUserController')
		const result = await addContactToUserController.invoke(request.params);
		response.status(result.status).send(result.body);
	});

	app.get('/user/:userGuid', async(request, response) => {
		const getUserController = require('../controllers/users/getUserController');
		const result = await getUserController.invoke(request.params);
		response.status(result.status).send(result.body);
	});

	app.get('/contacts/:userGuid', async(request, response) => {
		const getContactsForUserController = require('../controllers/contacts/getContactsForUserController');
		const result = await getContactsForUserController.invoke(request.params);
		response.status(result.status).send(result.body);
	});

}

//https://www.youtube.com/watch?v=srPXMt1Q0nY