//init code
const mongoose = require('mongoose');
const assert = require('assert');
const MONGODB_URL = process.env.MONGODB_URL;

//connection code
const mongoDBconnect = async (req, res) => {
    await mongoose.connect(
        MONGODB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        },
        (err, resp) => {
            //check error
            //assert.equal(err, null, 'DB Connection Fail......');
            if(resp){
                console.log('DB Connection Successfull....' + resp);
                
            }else if(err){
                console.log('DB Connection Fail....' + err);
            }
        }
    );
}

mongoDBconnect();

