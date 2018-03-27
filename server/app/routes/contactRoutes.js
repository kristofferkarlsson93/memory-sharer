const authHelper = require('../helpers/authHelper');

module.exports = (app) => {
  //Maybe reformat the route.
  app.post('/contacts', authHelper.verifyToken, async(request, response) => {
		const addContactController = require('../controllers/contacts/addContactController')
		const result = await addContactController.invoke(request.body);
		response.status(result.status).send(result.body);
	});

  app.get('/contacts', authHelper.verifyToken, async(request, response) => {
		const getContactsForUserController = require('../controllers/contacts/getContactsForUserController');
		const result = await getContactsForUserController.invoke(request.body);
		response.status(result.status).send(result.body);
	});

	app.get('/contact/:contactGuid', authHelper.verifyToken, async(request, response) => {
		const getContactController = require('../controllers/contacts/getContactController');
		request.body.contactGuid = request.params.contactGuid;
		const result = await getContactController.invoke(request.body);
		response.status(result.status).send(result.body);
	});
}