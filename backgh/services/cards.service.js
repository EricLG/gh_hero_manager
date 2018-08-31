// Gettign the Newly created Mongoose Model we just created
var Card = require('../models/card.model')

// Saving the context of this module inside the _the variable
_this = this

/**
 * Async function to get the Cards list paginated
 * @param query : Query criteria object
 * @param page : current page fetched
 * @param limit : limit of items per page
 * @link : https://github.com/edwardhotchkiss/mongoose-paginate
 */
exports.getCards = async function(query, page, limit){

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error
    try {
        var cards = await Card.paginate(query, options)
        // Return the todod list that was retured by the mongoose promise
        return cards;
    } catch (e) {
        // return a Error message describing the reason
        throw Error('Error while Paginating Cards')
    }
}

/**
 * Async function to get an unique Card
 * @param id : id of the card
 */
exports.getCard = async function(id){
    // Try Catch the awaited promise to handle the error
    try {
        console.log(id)
        var card = await Card.findById(id);
        // Return the Card that was retured by the mongoose promise
        return card;
    } catch (e) {
        // return a Error message describing the reason
        throw Error("Error occured while Finding the Card")
    }
}

exports.createCard = async function(card){
    // Creating a new Mongoose Object by using the new keyword
    var newCard = new Card({
        name: card.name,
        role: card.role,
        level: card.level,
        filename: card.filename,
        cardnumber: card.cardnumber
    })

    try {
        // Saving the Todo
        var savedCard = await newCard.save()
        return savedCard;
    } catch(e) {
        // return a Error message describing the reason
        throw Error("Error while Creating Card")
    }
}

exports.updateCard = async function(card){
    var id = card.id
    try {
        //Find the old Todo Object by the Id
        var oldCard = await Card.findById(id);
    } catch(e) {
        throw Error("Error occured while Finding the Card")
    }

    // If no old Card Object exists return false
    if(!oldCard){
        return false;
    }

    //Edit the Todo Object
    oldCard.name = card.name
    oldCard.role = card.role
    oldCard.level = card.level
    oldCard.filename = card.filename
    oldCard.cardnumber = card.cardnumber

    console.log(oldCard)

    try {
        var savedCard = await oldCard.save()
        return savedCard;
    } catch (e) {
        throw Error("And Error occured while updating the Card");
    }
}

exports.deleteCard = async function(id){

    // Delete the Card
    try {
        var deleted = await Card.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Card Could not be deleted")
        }
        return deleted
    } catch (e) {
        throw Error("Error Occured while Deleting the Card")
    }
}
