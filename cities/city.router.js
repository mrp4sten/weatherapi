import express from 'express'
import { httpBootstrapCities, httpDeleteCity, httpGetCity, httpPostCity, httpUpdateCity } from './city.http.js'
const citiesRouter = express.Router()

citiesRouter.route('/')
  .post(httpPostCity)
  .get(httpGetCity)
  .put(httpUpdateCity)
  .delete(httpDeleteCity)

citiesRouter.route('/bootstrap')
  .post(httpBootstrapCities)

export default citiesRouter
