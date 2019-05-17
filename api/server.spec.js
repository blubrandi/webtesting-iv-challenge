const request = require('supertest')
const server = require('./server.js')

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
})
