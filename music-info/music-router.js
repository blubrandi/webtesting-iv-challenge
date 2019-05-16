const router = require('express').Router();

const Songs = require('./music.js');

router.get('/', restricted, (req, res) => {
    Songs.find()
        .then(songs => {
            res.json(songs);
        })
        .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    Songs.findById(req.params.id)
        .then(song => {
            res.json(song);
        })
        .catch(err => res.send(err));
});

router.get('/:songName', (req, res) => {
    Songs.findBySongName(req.params.songName)
        .then(songName => {
            res.json(songName);
        })
        .catch(err => res.send(err));
});

router.get('/:artistName', (req, res) => {
    Songs.findByArtist(req.params.artistName)
        .then(artist => {
            res.json(artist);
        })
        .catch(err => res.send(err));
});

module.exports = router;