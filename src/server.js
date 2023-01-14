const express = require('express')
const app = express()
const setViewEngine = require('../src/configs/viewEngine')
const initWebRoute = require('./routes/web')

require('dotenv').config()
const port = process.env.PORT

setViewEngine(app)
initWebRoute(app)

app.listen(port, () => {
    console.log(`App is listening at localhost:${port}`)
})