const router = require('express').Router();
const messages = require('./messages');

router.use('/messages', messages);

module.exports = router;