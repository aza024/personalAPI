const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//center schema should be capitalized
var CenterSchema = new Schema({
    name: String,
    address: String, 
    phone: String,
    email: String,
    website: String,
    disabilityServed: String
})

var Center = mongoose.model('Center', CenterSchema)

module.exports = Center;