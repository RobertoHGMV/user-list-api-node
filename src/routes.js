const express = require('express');

const UserRoutes = require('./routes/UserRoutes');

const routes = express.Router();

UserRoutes.addRoutes(routes);

module.exports = routes;