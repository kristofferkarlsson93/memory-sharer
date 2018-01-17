const uploadFile = require('../configs/multerConfig');


module.exports = (app) => {

  app.post('/memory', uploadFile.single(), (request, response) => {
    const addMemoryController('../controllers/memories/addMemoryController.js');
    const result = addMemoryController.invoke(request.body, request.file);
  });
}

app.get('memory/:memoryGuid', (request, response) => {

})