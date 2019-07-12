const router = require('express').Router()
const serviceController = require('../../controllers/serviceController')

//matches with "/messages"
router
    .route('/')
    .post(serviceController.create)

//matches with "/messages/<hash>"

module.exports = router