const express = require('express');
const helmet = require('helmet');

const routes = require('./routes');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api', routes);

module.exports = server;
