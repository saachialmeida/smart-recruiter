//init code
const mongoose = require('mongoose');

//creating Schema
const StudentModel = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    enrollment_id: {
        type: String,
        require: true,
        unique: true
    },
    branch: {
        type: String,
        require: true
    },
    mobile_number: {
        type: Number,
        require: true
    },
    year_of_passing: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

//creating Models
mongoose.model('Student', StudentModel);
//exports model
module.exports = mongoose.model('Student');