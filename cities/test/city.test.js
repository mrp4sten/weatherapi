import { assert, use } from 'chai'
import superagent from 'chai-superagent'
import { after, describe, it } from 'mocha'
import request from 'supertest'
import app from '../../app.js'
import { cleanUpCities } from '../city.controller.js'

use(superagent())

describe('Test suite for cities', () => {
  it('Should return status 201 when a city is added', (done) => {
    const city = {
      name: 'New York',
      location: {
        lat: 40.7128,
        long: -74.0060
      }
    }

    request(app)
      .post('/cities')
      .set('Content-Type', 'application/json')
      .send(city)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        assert.equal(res.status, 201)
        done()
      })
  })
})

after(async () => {
  await cleanUpCities()
})
