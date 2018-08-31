var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var CardSchema = new mongoose.Schema({
    name: String,
    role: String,
    level: String,
    filename: String,
    cardnumber: String

})

CardSchema.plugin(mongoosePaginate)
const Card = mongoose.model('Card', CardSchema)

module.exports = Card;
