import dotenv from 'dotenv'

dotenv.config()

const API_KEY = process.env.API_KEY

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

export const getWeatherFromCityName = (cityName) => {
  return new Promise((resolve, reject) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const jsonResult = JSON.parse(result)
        resolve(jsonResult.current.condition.text)
      })
      .catch((error) => reject(error))
  })
}
