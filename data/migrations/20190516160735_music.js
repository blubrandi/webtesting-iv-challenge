exports.up = function (knex, Promise) {
    return knex.schema.createTable('music', tbl => {
        tbl.increments()

        tbl.string('songName', 255).notNullable()
        tbl.string('artistName', 255).notNullable()
        tbl.text('songNotes', 255).notNullable()
    })
}

exports.down = function (knex, Promise) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('music')
}
