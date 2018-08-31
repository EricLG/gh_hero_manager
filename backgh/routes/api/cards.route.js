var express = require('express')

var router = express.Router()

var CardController = require('../../controllers/cards.controller');

// Map each API to the Controller Functions
router.get('/', CardController.getCards)
//router.get('/:id', CardController.getCard)
router.post('/', CardController.createCard)
router.put('/', CardController.updateCard)
router.delete('/:id',CardController.removeCard)

// Export the Router
module.exports = router;
