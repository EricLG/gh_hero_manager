// Accessing the Service that we just created
var CardService = require('../services/cards.service')

// Saving the context of this module inside the _the variable
_this = this

// Async Controller function to get the To do List

exports.getCards = async function(req, res, next){
    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;

    try {
        var cards = await CardService.getCards({}, page, limit)
        // Return the cards list with the appropriate HTTP Status Code and Message.
        return res.status(200).json({status: 200, data: cards, message: "Succesfully cards Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getCard = async function(req, res, next) {
    var id = req.params.id;
    try {
        var card = await CardService.getCard(id)
        // Return the card with the appropriate HTTP Status Code and Message.
        return res.status(200).json({status: 200, data: card, message: "Succesfully card Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createCard = async function(req, res, next){
    // Req.Body contains the form submit values.
    var card = {
        name: req.body.name,
        role: req.body.role,
        level: req.body.level,
        filename: req.body.filename,
        cardnumber: req.body.cardnumber
    }

    try {
        // Calling the Service function with the new object from the Request Body
        var createdCard = await CardService.createCard(card)
        return res.status(201).json({status: 201, data: createdCard, message: "Succesfully Created Card"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: "Card Creation was Unsuccesfull"})
    }
}

exports.updateCard = async function(req, res, next){
    // Id is necessary for the update
    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }
    var id = req.body._id;
    console.log(req.body)
    var card = {
        id,
        name: req.body.name ? req.body.name : null,
        role: req.body.role ? req.body.role : null,
        level: req.body.level ? req.body.level : null,
        filename: req.body.filename ? req.body.filename : null,
        cardnumber: req.body.cardnumber ? req.body.cardnumber : null
    }

    try {
        var updatedCard = await CardService.updateCard(card)
        return res.status(200).json({status: 200, data: updatedCard, message: "Succesfully Updated Card"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeCard = async function(req, res, next){
    var id = req.params.id;

    try {
        var deleted = await CardService.deleteCard(id)
        return res.status(204).json({status:204, message: "Succesfully Card Deleted"})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}
