const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findBySongName,
    findByArtist
};

function find() {
    return db('music').select('id', 'songName', 'artistName');
}

function findBy(filter) {
    return db('music').where(filter);
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