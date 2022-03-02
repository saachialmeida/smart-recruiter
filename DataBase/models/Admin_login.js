//init code
const mongoose = require('mongoose');

//creating Schema
const loginschema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

//creating Models
mongoose.model('Admin_login', loginschema);
//exports model
module.exports = mongoose.model('Admin_login');