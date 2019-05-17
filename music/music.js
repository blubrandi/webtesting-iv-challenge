const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('music').select('id', 'songName', 'artistName', 'songNotes');
}

function findBy(filter) {
    return db('music').where(filter);
}

function findById(id) {
    return db('music')
        .where({ id })
        .first();
}

async function add(song) {
    const [id] = await db('music').insert(song);

    return findById(id);
}

function findBySongName(songName) {
    return db('music')
        .where({ songName })
        .first();
}

function findByArtist(artistName) {
    return db('music')
        .where({ artistName })
        .first();
}

