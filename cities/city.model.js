import mongoose from 'mongoose'

export const CityModel = mongoose.model('City', {
  name: String,
  location: {
    lat: Number,
    long: Number
  }
})
