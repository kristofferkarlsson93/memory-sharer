'use strict';

module.exports = (app, db) => {

    app.post('/user', async (request, response) => {
        const addUserController = require('../controllers/users/addUserController.js');
        const result = await addUserController.invoke(request.body);
        response.status(result.status).send(result.body);
    });

}