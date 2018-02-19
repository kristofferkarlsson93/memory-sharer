'use strict';
const userRoutes = require('./userRoutes');
const contactRoutes = require('./contactRoutes');
const memoryRoutes = require('./memoryRoutes');
const authRoutes = require('./authRoutes');

module.exports = (app, multerFileUpload) => {
    authRoutes(app);
    userRoutes(app);
    contactRoutes(app);
    memoryRoutes(app, multerFileUpload);
    
}