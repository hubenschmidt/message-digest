const router = require('express').Router();
const messageRoutes = require('./messages');

//message routes
router.use('/', messageRoutes)

module.exports = router;