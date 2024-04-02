import express from 'express'
import { httpDeleteCity, httpGetCity, httpPostCity, httpUpdateCity } from './city.http.js'
const citiesRouter = express.Router()

citiesRouter.route('/')
  .post(httpPostCity)
  .get(httpGetCity)
  .put(httpUpdateCity)
  .delete(httpDeleteCity)

export default citiesRouter
