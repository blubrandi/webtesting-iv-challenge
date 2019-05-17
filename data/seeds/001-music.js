
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('music').del()
    .then(function () {
      // Inserts seed entries
      return knex('music').insert([
        {
          id: 1,
          songName: 'Brandy',
          artistName: 'Looking Glass',
          songNotes: 'This is how I got my name!'
        },
        {
          id: 2,
          songName: 'Into The Night',
          artistName: 'Benny Mardones',
          songNotes: 'Reminds me of my dad...'
        },
        {
          id: 3,
          songName: 'Bridge Over Troubled Water',
          artistName: 'Simon and Garfunkel',
          songNotes: 'Sail on silver girl Sail on by Your time has come to shine All your dreams are on their way See how they shine Oh, if you need a friend I\'m sailing right behind Like a bridge over troubled water I will ease your mind',
        }
      ]);
    });
};
