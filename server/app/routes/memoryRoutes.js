
module.exports = (app, multerFileUpload) => {

  app.post('/memory', multerFileUpload.single('memory'), async(request, response) => {
    const addMemoryController = require('../controllers/memories/addMemoryController');
    const result = await addMemoryController.invoke(request.body, request.file);
    response.status(result.status).send(result.body);
  });

  // + ?clientGuid=....
  app.get('/memory/:memoryGuid', async(request, response) => {
    const getMemoryController = require('../controllers/memories/getMemoriesController');
    request.params.clientGuid = request.query.clientGuid
    const result = await getMemoryController.invoke(request.params);
    response.status(result.status).send(result.body);
  });

  // + ?filePath=...
  app.get('/image/', (request, response) => {
    const getImageController = require('../controllers/memories/getImageController');
    result = getImageController.invoke(request.query.filePath);
    if (result.status === 200) {
      response.status(result.status).sendFile(result.body);
    } else response.status(result.status).send(result.body);
  })
}

