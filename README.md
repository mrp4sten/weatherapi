# Weather API

## Description

This project was maked using TDD, is a CRUD api with MongoDB and Express.
And also have a little integration with API Weather that allow see the current condition.

## Dependencies

- NodeJS
- npm
- .env file
- MongoDB Connection database

### MongoDB Connection

From MongoDB Atlas we need username and password for `.env` file, follow the information from MongoDB <https://www.mongodb.com/cloud/atlas/register>

### API KEY

You need make an account here <https://www.weatherapi.com/> and take your personal API key to use after opn the `.env` file

### .env file

This file shoul have on same level of path `package.json` to be loaded by the application and should be like this:

```shell
DB_USER=username
DB_PASSWORD=password
API_KEY=api_key
ENV=prod # dev for testing
```
