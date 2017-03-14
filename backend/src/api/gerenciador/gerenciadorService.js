'use strict';
const tarefas  = require('./gerenciadorSchema');

tarefas.methods(['get','post','put','delete']);
tarefas.updateOptions({
    new: true,
    runValidators: true
});

module.exports = tarefas;