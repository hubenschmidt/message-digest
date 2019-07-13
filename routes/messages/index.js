const router = require('express').Router();
const messages = require('./messages');

//message routes
router.use('/messages', messages);

module.exports = router;