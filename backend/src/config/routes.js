'use strict';
const express = require('express');
const router = express.Router();
const gerenciadorService = require('../api/gerenciador/gerenciadorService');

module.exports = function (server) {
    //API
    server.use('/api', router);

    //Gerenciador Routes
     gerenciadorService.register(router, '/gerenciador');
}