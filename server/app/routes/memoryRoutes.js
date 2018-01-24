
module.exports = (app, multerFileUpload) => {

  app.post('/memory', multerFileUpload.single('memory'), async(request, response) => {
    const addMemoryController = require('../controllers/memories/addMemoryController');
    const result = await addMemoryController.invoke(request.body, request.file);
    console.log(result);
    response.status(result.status).send(result.body);
  });


  app.get('/memory/:memoryGuid', async(request, response) => {
    const getMemoryController = require('../controllers/memories/getMemoriesController');
    request.params.clientGuid = request.query.clientGuid
    const result = await getMemoryController.invoke(request.params);
    console.log('result', result);
    response.send('testing');
  });
}

