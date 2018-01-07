'use strict';
const userRoutes = require('./userRoutes');

module.exports = (app) => {
    userRoutes(app);
}