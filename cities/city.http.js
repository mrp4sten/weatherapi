import { createCity, deleteCity, getCities, getCity, updatetCity } from './city.controller.js'

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

export const httpUpdateCity = async (req, res) => {
  const cityName = req.query.name
  const city = req.body

  const result = await updatetCity(cityName, city)
  res.status(200).send(result)
}

export const httpDeleteCity = async (req, res) => {
  const cityName = req.query.name
  const result = await deleteCity(cityName)
  res.status(200).send(result)
}
