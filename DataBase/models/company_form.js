//init code
const mongoose = require('mongoose');

//creating Schema
const CompanyFormSchema = mongoose.Schema({
    company_name: {
        type: String,
        require: true,
        unique: true
    },
    student_year: {
        type: Number,
        require: true,
    },
    company_google_link: {
        type: String,
        require: true,
        unique: true
    }
});

//creating Models
mongoose.model('CompanyForm', CompanyFormSchema);
//exports model
module.exports = mongoose.model('CompanyForm');