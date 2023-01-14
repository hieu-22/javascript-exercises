const express = require('express')
const router = express.Router()
const webController = require('../controller/webController')

const initWebRoute = (app) => {
    router.get('/', webController.getWeb)
    router.post('/create-user', webController.createUser)
    // logic above
    return app.use('/', router)
}

module.exports = initWebRoute