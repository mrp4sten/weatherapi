import { createCity } from './city.controller.js'

/**
 * Post a city
 * @param {*} req
 * @param {*} res
 */
export const postCity = async (req, res) => {
  const city = req.body
  await createCity(city)
  res.status(201).send()
}
