'use strict';
const userRoutes = require('./userRoutes');
const contactRoutes = require('./contactRoutes');

module.exports = (app) => {
    userRoutes(app);
    contactRoutes(app);
}