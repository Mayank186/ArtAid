var express = require('express');
var router = express.Router();

//Authentication
router.use('/auth', require('./auth'));

// User Router
router.use('/user', require('./users'));

module.exports = router;
