import { assert, use } from 'chai'
import superagent from 'chai-superagent'
import { after, describe, it } from 'mocha'
import request from 'supertest'
import app from '../../app.js'
import { cleanUpCities } from '../city.controller.js'

use(superagent())

describe('Test suite for cities', () => {
  it('Should return status 201 when a city is added, whit body', (done) => {
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
        assert.equal(res.body.name, city.name)
        assert.equal(res.body.location.lat, city.location.lat)
        assert.equal(res.body.location.long, city.location.long)
        done()
      })
  })
  it('Should return status 200 when a city is requested, whit body', (done) => {
    const city = {
      name: 'Washington',
      location: {
        lat: 38.9072,
        long: -77.0369
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
        request(app)
          .get(`/cities/?name=${city.name}`)
          .set('Content-Type', 'application/json')
          .end((err, res) => {
            if (err) {
              return done(err)
            }
            assert.equal(res.status, 200)
            assert.equal(res.body.name, city.name)
            assert.equal(res.body.location.lat, city.location.lat)
            assert.equal(res.body.location.long, city.location.long)
            done()
          })
      })
  })
  it('Should return status 200 when all cities is requested, whit body', (done) => {
    const cities = [
      {
        name: 'Chicago',
        location: {
          lat: 41.8781,
          long: -87.6298
        }
      },
      {
        name: 'Houston',
        location: {
          lat: 29.7604,
          long: -95.3698
        }
      }
    ]

    request(app)
      .post('/cities')
      .set('Content-Type', 'application/json')
      .send(cities[0])
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        request(app)
          .post('/cities')
          .set('Content-Type', 'application/json')
          .send(cities[1])
          .end((err, res) => {
            if (err) {
              return done(err)
            }
            request(app)
              .get('/cities')
              .set('Content-Type', 'application/json')
              .end((err, res) => {
                if (err) {
                  return done(err)
                }
                assert.equal(res.status, 200)
                assert.equal(res.body.length, cities.length)
                assert.equal(res.body[0].name, cities[0].name)
                assert.equal(res.body[0].location.lat, cities[0].location.lat)
                assert.equal(res.body[0].location.long, cities[0].location.long)
                assert.equal(res.body[1].name, cities[1].name)
                assert.equal(res.body[1].location.lat, cities[1].location.lat)
                assert.equal(res.body[1].location.long, cities[1].location.long)
                done()
              })
          })
      })
  })
  it('Should return status 200 when a city is updated, with body', (done) => {
    const cityPhoenix = {
      name: 'Phoenix',
      location: {
        lat: 33.4484,
        long: -112.0740
      }
    }

    request(app)
      .post('/cities')
      .set('Content-Type', 'application/json')
      .send(cityPhoenix)
      .end((err, res) => {
        if (err) {
          return done(err)
        }

        const cityPhiladelphia = {
          name: 'Philadelphia',
          location: {
            lat: 39.9526,
            long: -75.1652
          }
        }
        request(app)
          .put(`/cities/?name=${cityPhoenix.name}`)
          .set('Content-Type', 'application/json')
          .send(cityPhiladelphia)
          .end((err, res) => {
            if (err) {
              return done(err)
            }
            assert.equal(res.status, 200)
            assert.equal(res.body.name, cityPhiladelphia.name)
            assert.equal(res.body.location.lat, cityPhiladelphia.location.lat)
            assert.equal(res.body.location.long, cityPhiladelphia.location.long)
            done()
          })
      })
  })
  it('Should return status 200 when a city is deleted, with body', (done) => {
    const citySanAntonio = {
      name: 'San Antonio',
      location: {
        lat: 29.4241,
        long: -98.4936
      }
    }

    request(app)
      .post('/cities')
      .set('Content-Type', 'application/json')
      .send(citySanAntonio)
      .end((err, res) => {
        if (err) {
          return done(err)
        }

        request(app)
          .delete(`/cities/?name=${citySanAntonio.name}`)
          .end((err, res) => {
            if (err) {
              return done(err)
            }
            assert.equal(res.status, 200)
            done()
          })
      })
  })
})

after(async () => {
  await cleanUpCities()
})
