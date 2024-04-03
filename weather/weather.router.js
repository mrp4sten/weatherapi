import express from 'express'
import { httpGetWeatherByCityName } from './weather.http.js'
const weatherRouter = express.Router()

weatherRouter.route('/')
  .get(httpGetWeatherByCityName)

export default weatherRouter
