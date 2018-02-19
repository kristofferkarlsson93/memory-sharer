

module.exports = (app) => {

  app.post('/auth/login', async (request, response) => {
    const loginController = require('../controllers/auth/loginByUsernameController');
    const result = await loginController.invoke(request.body);
    response.status(result.status).send(result.body);
  });
}