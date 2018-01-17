'use strict';
const userRoutes = require('./userRoutes');
const contactRoutes = require('./contactRoutes');
const memoryRoutes = require('./memoryRoutes');

module.exports = (app, multerFileUpload) => {
    userRoutes(app);
    contactRoutes(app);
    memoryRoutes(app, multerFileUpload);
    
}