import bodyParser from 'body-parser'

export const setUpMiddlewares = (app) => {
  app.use(bodyParser.json())
}
