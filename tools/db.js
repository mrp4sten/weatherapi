import dotenv from 'dotenv'
import mongoose from 'mongoose'

// Load environment variables
dotenv.config()

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

const db = process.env.ENV === 'dev' ? 'TestDB' : 'ProductionDB'
const mongoUrl = `mongodb+srv://${user}:${password}@cluster0.epbozk0.mongodb.net/${db}?retryWrites=true&w=majority`

/**
 * Connects to MongoDB
 * @returns {Promise<void>}
 */
export const connectWithMongoDB = async () => {
  return mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB')
  })
}
