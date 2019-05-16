const express = require('express');
const helmet = require('helmet');

const music = require('../music-info/music-router.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/music');

// sanity check route
server.get('/', (req, res) => {
    res.status(200).json({ message: 'This thing works!  OOOHRAH!' });
});

module.exports = server;
