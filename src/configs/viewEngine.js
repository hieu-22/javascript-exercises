const express = require('express')
const app = express()

const setViewEngine = (app) => {
    app.use(express.static('./src/public'))

    app.set('view engine', 'ejs')
    app.set('views', './src/views')

    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
}

module.exports = setViewEngine