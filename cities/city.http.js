import { bootstrapCities, createCity, deleteCity, getCities, getCity, updatetCity } from './city.controller.js'

/**
 * Post a city
 * @param {*} req
 * @param {*} res
 */
export const httpPostCity = async (req, res) => {
  const city = req.body
  const result = await createCity(city)
  res.status(201).send(result)
}

/**
 * Get a city or cities if the request have a query
 * @param {*} req
 * @param {*} res
 */
export const httpGetCity = async (req, res) => {
  const cityName = req.query.name

  let response = ''

  if (cityName) {
    response = await getCity(cityName)
  } else {
    response = await getCities()
  }

  res.status(200).send(response)
}

/**
 * Update a city
 * @param {*} req
 * @param {*} res
 */
export const httpUpdateCity = async (req, res) => {
  const cityName = req.query.name
  const city = req.body

  const result = await updatetCity(cityName, city)
  res.status(200).send(result)
}

/**
 * Delete a city
 * @param {*} req
 * @param {*} res
 */
export const httpDeleteCity = async (req, res) => {
  const cityName = req.query.name
  const result = await deleteCity(cityName)
  res.status(200).send(result)
}

/**
 * Fill database with cities from request
 * @param {*} req
 * @param {*} res
 */
export const httpBootstrapCities = async (req, res) => {
  const cities = req.body
  await bootstrapCities(cities)
  res.status(200).send()
}
