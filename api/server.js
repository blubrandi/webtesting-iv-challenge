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
    res.status(200).json({ message: 'This thing works!  OOOHRAH!' })
});


// endpoints

server.get('/songs', (req, res) => {
    Songs.find()
        .then(songs => {
            res.status(200).json(songs)
        })
        .catch(err => res.send(err))
})

server.get('/songs/:id', (req, res) => {
    Songs.findById(req.params.id)
        .then(song => {
            res.status(200).json(song)
        })
        .catch(err => res.send(err))
})

server.post('/songs', (req, res) => {
    const { songName, artistName, songNotes } = req.body

    Songs.add({ songName, artistName, songNotes }).then(song => {
        res.status(201).json({ song })
    }).catch(error => {
        res.status(500).json(error)
    })
});


module.exports = server;
