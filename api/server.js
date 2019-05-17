const express = require('express');
const helmet = require('helmet');

// const music = require('../music/music-router.js')
const Songs = require('../music/music.js');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/api/music');

// sanity check route
server.get('/', (req, res) => {
    res.status(200).json({ message: 'This thing works!  OOOHRAH!' });
});


// endpoints

server.get('/songs', (req, res) => {
    Songs.find()
        .then(songs => {
            res.json(songs);
        })
        .catch(err => res.send(err));
});

server.get('/songs/:id', (req, res) => {
    const { id } = req.params.id
    Songs.findById(id)
        .then(song => {
            res.json(song);
        })
        .catch(err => res.send(err));
});

server.get('/:songName', (req, res) => {
    Songs.findBySongName(req.params.songName)
        .then(songName => {
            res.json(songName);
        })
        .catch(err => res.send(err));
});

server.get('/:artistName', (req, res) => {
    Songs.findByArtist(req.params.artistName)
        .then(artist => {
            res.json(artist);
        })
        .catch(err => res.send(err));
});

module.exports = server;
