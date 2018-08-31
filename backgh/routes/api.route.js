var express = require('express')

var router = express.Router()
var cards = require('./api/cards.route')
router.use('/cards', cards);

module.exports = router;
