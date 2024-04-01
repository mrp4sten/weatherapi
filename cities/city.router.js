import express from 'express'
import { postCity } from './city.http.js'
const citiesRouter = express.Router()

citiesRouter.route('/')
  .post(postCity)

export default citiesRouter
