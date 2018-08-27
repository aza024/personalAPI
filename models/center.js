const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//center schema should be capitalized
var CenterSchema = new Schema({
    name: String,
    address: String, 
    number: String,
    email: String,
    website: String,
    disserved: String
})

var Center = mongoose.model('Center', CenterSchema)

module.exports = Center;