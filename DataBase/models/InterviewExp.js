//init code
const mongoose = require('mongoose');
//creating Schema
const InterviewExpSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    Student_name: {
        type: String,
        require: true,
    },
    Company_Name: {
        type: String,
        require: true,
    },
    Stpackage: {
        type: String,
        require: true,
    },
    Date_of_interview: {
        type: String,
        require: true
    },
    Student_exp: {
        type: String,
        require: true
    },
    Approval: {
        type: Boolean,
        require: true
    }
});

//creating Models
mongoose.model('InterviewExp', InterviewExpSchema);
//exports model
module.exports = mongoose.model('InterviewExp');