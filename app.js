import express from 'express'
import { connectWithMongoDB } from './tools/db.js'

const app = express()
const port = 3000

// MongoDB connection
connectWithMongoDB()

app.listen(port, () => {
  console.log('Server started on port ', port)
})

export default app
