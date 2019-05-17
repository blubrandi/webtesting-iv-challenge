const db = require('../data/dbConfig.js');

module.exports = {
    add,
    remove,
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

function remove(id) {
    return db('music')
        .where('id', id)
        .del();
}

