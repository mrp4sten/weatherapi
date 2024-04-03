import { getWeatherFromCityName } from './weather.controller.js'

/**
 * Get weather of a city by his name
 * @param {*} req
 * @param {*} res
 * @returns Weather of city
 */
export const httpGetWeatherByCityName = async (req, res) => {
  const cityName = req.query.cityName
  const result = await getWeatherFromCityName(cityName)
  return res.status(200).send(result)
}
