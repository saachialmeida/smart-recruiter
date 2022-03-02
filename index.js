//init code
require('dotenv').config();
const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const db = require('./DataBase/db');
const loginController = require('./controller/loginController');
const StudentController = require('./controller/StudentController');
//middleware
app.use(cors());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use('/Admin', loginController);
app.use('/Student', StudentController);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}else{
    app.use(express.static('frontend/build'));
}

//app listen
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});

