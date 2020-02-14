const express = require('express');

const projectRouter = require('./data/helpers/projectRouter');
const actionRouter = require('./data/helpers/actionRouter');

const server = express();

server.use(express.json());

// Routes
server.use('/api/projects', logger, projectRouter);
server.use('/api/actions', logger, actionRouter);

server.get('/', (req, res) => {
    res.send(
        `<div>
            <h1>Node Sprint Challenge 1</h1>
            <h2>By Cameron Hawley</h2>
        </div>
        `
    )
})

server.get('*', (req, res) => {
    res.status(404).end('I did not implement a route here...')
})

function logger(req, res, next) {
    console.log(`${req.method} request to ${req.originalUrl} at ${new Date()}`)

    next()
}

module.exports = server;