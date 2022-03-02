/**---------------------------------------------------
    *require Modules  
------------------------------------------------------*/
const router = require('express').Router();
const session = require('express-session');
const bodyparser = require('body-parser');
const bcryptjs = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const Admin_login = require('../DataBase/models/Admin_login');
const student_model = require('../DataBase/models/student_model');

const CompanyController = require('./CompanyController');
var sessStore;
/**---------------------------------------------------
    *Middleware Setup for Admin  
------------------------------------------------------*/
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));
router.use('/company', CompanyController);
router.use(session({
    secret: 'FuAa3uH_nbFnBk5QxR@=',
    saveUninitialized: true,
    resave: true
}));
/**---------------------------------------------------
    *Route for Creating New Admin  
------------------------------------------------------*/
router.post('/createAdmin',
    [
        check('name').not().isEmpty().trim().escape(),
        check('email').isEmail().normalizeEmail(),
        check('password').not().isEmpty().trim().escape()
    ],
    (req, res) => {
        //check validation Errors
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json({
                status: false,
                msg: 'Invalid Input....!',
                err: error.array()
            });
        }
        //password hashing
        const hashpassword = bcryptjs.hashSync(req.body.password, 10);
        Admin_login.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: hashpassword
            },
            (err, result) => {
                //check if error 
                if (err)
                    return res.send('sorry, Not able to insert Data in Database');

                //if ok
                return res.json({
                    status: true,
                    msg: 'Data Inserted Successfully.....',
                    res: result
                })
            }
        )
    }
);

/**---------------------------------------------------
    *Route for Admin Login  
------------------------------------------------------*/
router.post('/login',
    [
        check('email').isEmail().normalizeEmail(),
        check('password').not().isEmpty().trim().escape()
    ], (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json({
                status: false,
                msg: 'Invalid Input....!',
                err: error.array()
            });
        }

        Admin_login.findOne({ 'email': req.body.email }, (err, admin) => {
            if (!admin) {
                return res.json({
                    status: false,
                    msg: 'login failed, email Not Found'
                });
            } else {
                bcryptjs.compare(req.body.password, admin.password, (err, isMatch) => {
                    //if error
                    if (err) {
                        return res.json({
                            status: false,
                            msg: 'Server Error'
                        });
                    }

                    //check password valid or not
                    if (isMatch === false) {
                        return res.json({
                            status: false,
                            msg: 'Invalid Password'
                        });
                    } else {
                        sessStore = req.session;
                        sessStore.email = req.body.email;
                        return res.status(200).json({
                            status: true,
                            msg: 'Login Sucessfully....',
                            data: admin
                        });
                    }
                });
            }
        });
    });
/**---------------------------------------------------
    *Route to get Admin Information from Database  
------------------------------------------------------*/
router.get('/getinfo', (req, res) => {
    Admin_login.findOne({ 'email': sessStore.email }, (err, result) => {
        //if error
        if (err) {
            return res.json({
                status: false,
                msg: 'DataBase Error',
                error: err
            });
        }
        //if ok
        return res.json({
            status: true,
            email: result.email,
            name: result.name
        });
    });
});

/**---------------------------------------------------
    * logout Route  
------------------------------------------------------*/
router.get('/logout', (req, res) => {
    req.session.destroy();
    console.log("session destroy ...");
    res.json({
        status: true,
    });
});

/**---------------------------------------------------
    * Update Admin Password  
------------------------------------------------------*/
router.put('/changePassword',
    [
        check('newpass').not().isEmpty().trim().escape()
    ],
    (req, res) => {
        //check validation Errors
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json({
                status: false,
                msg: 'Invalid Input....!',
                err: error.array()
            });
        }
        //password hashing
        const hashpassword = bcryptjs.hashSync(req.body.newpass, 10);
        Admin_login.findOneAndUpdate({ 'email': sessStore.email }, { 'password': hashpassword }, (err, result) => {
            //if error
            if (err) {
                return res.json({
                    status: false,
                    msg: 'DataBase Error',
                    error: err
                });
            }
            //if ok
            return res.json({
                status: true,
                msg: 'Password Change Successfully....!',
            });
        });
    }
);

/**
 * Get Student Data to Admin API
 **/
router.get('/StudentDetails', (req, res) => {
    student_model.find((err, data) => {
        //check if error
        if (err) {
            return res.json({
                status: false,
                msg: 'Unable to fetch data from Database',
                error: err
            })
        }
        //if ok
        return res.json({
            status: true,
            data: data,
        })
    });
});

//exports module
module.exports = router;