
module.exports = (app, multerFileUpload) => {

  app.post('/memory', multerFileUpload.single('memory'), (request, response) => {
    const addMemoryController = require('../controllers/memories/addMemoryController');
    const result = addMemoryController.invoke(request.body, request.file);
    response.send('testar');
  });


  app.get('memory/:memoryGuid', (request, response) => {
  })
}

