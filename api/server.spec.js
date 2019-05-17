const request = require('supertest')
const server = require('./server.js')

const Songs = require('../music/music.js')
const db = require('../data/dbConfig.js')

describe('Server', () => {
    describe('GET /songs', () => {
        it('Should receive 200 res', () => {
            return request(server)
                .get('/songs')
                .then(response => {
                    expect(response.status).toBe(200)
                })
        })
    })

    it('should return JSON using done callback', done => {
        request(server)
            .get('/')
            .then(res => {
                expect(res.type).toBe('application/json')
                done()
            })
    })

    describe('Music JS', () => {

        beforeEach(async () => {
            await db('music').truncate()
        })

        describe('add()', () => {
            it('should add provided song', async () => {
                await Songs.add({
                    songName: 'Imagine',
                    artistName: 'Beatles',
                    songNotes: 'Imagine all the people...'
                })
            })
        })

        describe('remove()', () => {
            it('should remove the song by id', () => {
                return request(server)
                    .delete('/songs/1')
                    .expect(200)
            })
        })

    })
})
