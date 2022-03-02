//init code
require('dotenv').config();
const router = require('express').Router();
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');
const otpGenerator = require('otp-generator');
const student_model = require('../DataBase/models/student_model');

const sendOTP = (email, res) => {

    /**---------------------------------------------------
        * nodemailer service  
    ------------------------------------------------------*/
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
    });
    /**
     * Generate random OTP
     */
    var otp = otpGenerator.generate(6, { alphabets: false, specialChars: false, upperCase: false });
    console.log(otp + " " + email);

    let body = {
        from: 'svvvsmartrecruiter@gmail.com',
        to: email,
        subject: 'One Time Password from Svvv Smart Recuiter Team',
        html: `<h2>Hello your OTP for email verification is <span style='background:yellow'> ${otp} <span></h2> 
        <br/> <u>please not share this OTP with anyone</u>`
    }

    /**
     * Send OTP
     */
    transporter.sendMail(body, (err, result) => {
        //if any err come
        if (err) {
            console.log(err);
            return res.json({
                status: false,
                msg: 'Invalid email or server error, please contact to Admin',
                error: err
            })
        }
        //if all ok
        return res.json({
            status: true,
            systemotp: otp,
            msg: 'Please check your mail and enter verify OTP',
            result: result
        })
    })
}

/**---------------------------------------------------
    * API for Generating OPT and send to user mail  
------------------------------------------------------*/
router.post('/verifyEmail',
    [
        check('email').isEmail().normalizeEmail(),
    ],
    (req, res) => {
        //if any error in email
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json({
                status: false,
                msg: 'Invalid Input or field is empty',
                err: error.array()
            });
        }
        const condition = req.body.condition;
        /** ----------------------------------------------------
         * if email is ok check email present in database or NOT
        -------------------------------------------------------*/
        student_model.findOne({ 'email': req.body.email }, (err, present) => {
            //if error send error
            if (err) {
                return res.json({
                    status: false,
                    err: err,
                    msg: 'server error'
                })
            }
            //if all ok
            if (condition === 'signUp') {
                if (present) {
                    return res.json({
                        status: false,
                        msg: 'Email id is already registor...'
                    })
                } else {
                    sendOTP(req.body.email, res);
                }
            }else if (condition === 'forgotpassword'){
                if (!present) {
                    return res.json({
                        status: false,
                        msg: 'Email id is NOT registor, please SignUp First...'
                    })
                } else {
                    sendOTP(req.body.email, res);
                }
            }

        });

    })

module.exports = router;