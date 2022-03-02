/** -----------------------------------------------------
 * Require Modules
 --------------------------------------------------------*/
const router = require('express').Router();
const body_parser = require('body-parser');
const { check, validationResult } = require('express-validator');
const InterviewExp = require('../DataBase/models/InterviewExp');

/** -------------------------
 * Middle Ware setup
 ----------------------------*/
router.use(body_parser.json());
router.use(body_parser.urlencoded({ extended: true }));

/** *************************************************
 * ----------------All API Code Start --------------
 ****************************************************/
router.get('/', (req, res) => {
    res.send('Student/InterviewExp/ is working fine');
});

/** *************************************************
 * ------------ API to add Data in Database ---------
 ****************************************************/
router.post('/add_interviewExp',
    [
        check('email').isEmail().normalizeEmail(),
        check('Student_name').not().isEmpty().trim().escape(),
        check('Company_Name').not().isEmpty().trim().escape(),
        check('Stpackage').not().isEmpty().trim().escape(),
        check('Date_of_interview').not().isEmpty().trim(),
        check('Student_exp').not().isEmpty().trim().escape(),
    ],
    (req, res) => {
        //check validation Errors
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json({
                status: false,
                msg: 'Invalid Input or any field is empty',
                err: error.array()
            });
        }
        //if ok then insert data in MonogoDB
        InterviewExp.findOne({ 'email': req.body.email }, (err, present) => {
            if (err) {
                return res.json({
                    status: false,
                    msg: 'Server Problem Please try later...!',
                    error: err
                })
            }
            else if (present) {
                return res.json({
                    status: false,
                    msg: "Your Interview Exprience is already Done, Wait for Admin Approval",
                })
            } else {
                InterviewExp.create({
                    email: req.body.email,
                    Student_name: req.body.Student_name,
                    Company_Name: req.body.Company_Name,
                    Stpackage: req.body.Stpackage,
                    Date_of_interview: req.body.Date_of_interview,
                    Student_exp: req.body.Student_exp,
                    Approval: false
                }, (err, result) => {
                    //check if error
                    if (err) {
                        return res.json({
                            status: false,
                            msg: 'Server Problem Please try later...!',
                            error: err
                        })
                    }
                    //if all ok
                    return res.json({
                        status: true,
                        msg: 'Data Added Succesfully.... Wait for Admin Approval.',
                        data: result
                    })
                })
            }
        })
    }
);

/**************************************
 * Get Company Form Details API
 **************************************/
router.get('/get_InterviewExp', (req, res) => {
    InterviewExp.find((err, data) => {
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
/**************************************
 * update Approval by Admin API
 **************************************/
router.put('/update_approval',
    [
        check('StEmail').isEmail().normalizeEmail(),
        check('appro').not().isEmpty().trim().escape(),
    ],
    (req, res) => {
        //check validation Errors
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json({
                status: false,
                msg: 'Invalid Input or any field is empty',
                err: error.array()
            });
        }
        //if everything is ok
        InterviewExp.findOneAndUpdate({ 'email': req.body.StEmail }, { 'Approval': req.body.appro}, (err, result)=>{
            //if error
            if (err) {
                return res.json({
                    status: false,
                    msg: 'Server Error, Please try later',
                    error: err
                });
            }
            //if result is null then email id not found
            if (result === null) {
                return res.json({
                    status: false,
                    msg: 'Server Error, Please try later',
                });
            } else {
                return res.json({
                    status: true,
                    msg: 'Data Updated....',
                });
            }
        })
    }
);
//exports module
module.exports = router;