// build your server here and require it from index.js
const express = require('express');

const resourceRoute = require('./resource/router');
const projectRoute = require('./project/router');
const taskRoute = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/resources', resourceRoute)
server.use('/api/projects', projectRoute)
server.use('/api/tasks', taskRoute)

module.exports = server;