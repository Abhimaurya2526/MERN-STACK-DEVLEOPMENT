
const {model, Schema} = require('../connection');

const mySchema = new Schema({
    username : String,
    email : String,
    passward : String ,
    age : Number 
})

module.exports = model('userCollection',mySchema);