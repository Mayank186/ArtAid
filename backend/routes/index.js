var express = require('express');
var router = express.Router();

//Authentication
router.use('/auth', require('./auth'));

// User Router
router.use('/user', require('./users'));

//Assignments 
router.use('/assignments', require('./assignments'));

//Chats
router.use('/chat', require('../routes/chat'));

module.exports = router;
