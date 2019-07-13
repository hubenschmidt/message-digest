const router = require('express').Router()
const serviceController = require('../../controllers/serviceController')

//matches with "/messages"
router
    .route('/')
    .post(serviceController.create)

//matches with "/messages/:hash"
router
    .route('/:hash')
    .get(serviceController.findOneByHash)

module.exports = router