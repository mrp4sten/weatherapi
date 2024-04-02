import { CityModel } from './city.model.js'

export const createCity = (city) => {
  return new Promise((resolve, reject) => {
    const newCity = new CityModel(city)
    newCity.save()
      .then((result) => resolve(result))
      .catch((err) => reject(err))
  })
}

export const getCity = (cityName) => {
  return new Promise((resolve, reject) => {
    CityModel.findOne({ name: cityName })
      .exec()
      .then((city) => resolve(city))
      .catch((err) => reject(err))
  })
}

export const getCities = () => {
  return new Promise((resolve, reject) => {
    CityModel.find()
      .exec()
      .then((cities) => resolve(cities))
      .catch((err) => reject(err))
  })
}

export const updatetCity = (cityName, city) => {
  return new Promise((resolve, reject) => {
    CityModel.findOneAndUpdate({ name: cityName }, city, { new: true })
      .exec()
      .then((city) => resolve(city))
      .catch((err) => reject(err))
  })
}

export const deleteCity = (cityName) => {
  return new Promise((resolve, reject) => {
    CityModel.findOneAndDelete({ name: cityName })
      .exec()
      .then(() => resolve())
      .catch((err) => reject(err))
  })
}

// CleanUp Cityes for testing
export const cleanUpCities = () => {
  return new Promise((resolve, reject) => {
    CityModel.deleteMany()
      .exec()
      .then(() => resolve())
      .catch((err) => reject(err))
  })
}
