module.exports = (app) => {

  //Maybe reformat the route.
  app.post('/user/:userGuid/contacts/:contactGuid', async(request, response) => {
		const addContactToUserController = require('../controllers/users/addContactToUserController')
		const result = await addContactToUserController.invoke(request.params);
		response.status(result.status).send(result.body);
	});

  app.get('/contacts/:userGuid', async(request, response) => {
		const getContactsForUserController = require('../controllers/contacts/getContactsForUserController');
		const result = await getContactsForUserController.invoke(request.params);
		response.status(result.status).send(result.body);
	});
}