import express from 'express'
import citiesRouter from './cities/city.router.js'
import { connectWithMongoDB } from './tools/db.js'
import { setUpMiddlewares } from './tools/middlewares.js'

const app = express()
const port = 3000

// MongoDB connection
connectWithMongoDB()

// Middlewares
setUpMiddlewares(app)

// Define routes
app.use('/cities', citiesRouter)

app.listen(port, () => {
  console.log('Server started on port ', port)
})

export default app
