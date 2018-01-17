'use strict';
const userRoutes = require('./userRoutes');
const contactRoutes = require('./contactRoutes');
const memoryRoutes = require('./memoryRoutes');

module.exports = (app) => {
    userRoutes(app);
    contactRoutes(app);
    memoryRoutes(app) //should this recieve the multer config instead?
    
}