/** -----------------------------------------------------
 * Require Modules
 --------------------------------------------------------*/
const router = require('express').Router();
const body_parser = require('body-parser');
const { check, validationResult } = require('express-validator');
const company_model = require('../DataBase/models/company_model');
const company_form = require('../DataBase/models/company_form');
const ObjectId = require('mongoose').Types.ObjectId;

/** -------------------------
 * Middle Ware setup
 ----------------------------*/
router.use(body_parser.json());
router.use(body_parser.urlencoded({ extended: true }));

/** *************************************************
 * ----------------All API Code Start --------------
 ****************************************************/
router.get('/', (req, res) => {
    res.send('Admin/company/ is working fine');
});
/**----------------------------
 *  Add Company Details Api
 */
router.post('/add_company',
    [
        check('name').not().isEmpty().trim().escape(),
        check('pre_placement').not().isEmpty().trim().escape(),
        check('date').not().isEmpty().trim().escape(),
        check('Cpackage').not().isEmpty().trim().escape(),
        check('student_placed').not().isEmpty().trim().escape(),
        check('technical').not().isEmpty().trim().escape(),
    ],
    (req, res) => {
        //check validation Errors
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json({
                status: false,
                msg: 'Invalid Input or any Field is Empty...!',
                err: error.array()
            })
        }

        company_model.create({
            name: req.body.name,
            pre_placement: req.body.pre_placement,
            date: req.body.date,
            Cpackage: req.body.Cpackage,
            student_placed: req.body.student_placed,
            technical: req.body.technical
        },
            (err, result) => {
                //check if error
                if (err) {
                    return res.json({
                        status: false,
                        msg: 'company data already inserted..!',
                        error: err
                    })
                }
                //if all ok
                return res.json({
                    status: true,
                    msg: 'Details Added Succesfully..',
                    res: result
                })
            }
        )
    }
)
/**
 * Get Company Details API
 */
router.get('/getDetails', (req, res) => {
    company_model.find((err, data) => {
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
/**
 * Delete Company Detail API
 */
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            status: false,
            msg: 'Data Not Found'
        });
    }
    company_model.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) {
            return res.json({
                status: false,
                msg: 'Database error in deleting the data',
                error: err
            })
        } else if (result == null) {
            return res.json({
                status: false,
                msg: 'Invalid Id',
            })
        } else {
            return res.json({
                status: true,
                msg: 'Data delete Successfully...',
                res: result
            })
        }
    });
});

/*************************************************************************
 * Company From Section Start API
 **************************************************************************/
router.post('/Add_company_form',
    [
        check('company_name').not().isEmpty().trim().escape(),
        check('student_year').not().isEmpty().trim().escape(),
        check('company_google_link').not().isEmpty().trim(),
    ],
    (req, res) => {
        //check validation Errors
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json({
                status: false,
                msg: 'Invalid Input or any Field is Empty...!',
                err: error.array()
            })
        }
        company_form.create({
            company_name: req.body.company_name,
            student_year: req.body.student_year,
            company_google_link: req.body.company_google_link,
        },
            (err, result) => {
                //check if error
                if (err) {
                    return res.json({
                        status: false,
                        msg: 'company Form data already inserted..!',
                        error: err
                    })
                }
                //if all ok
                return res.json({
                    status: true,
                    msg: 'Details Added Succesfully..',
                    res: result
                })
            }
        )

    }
)
/**************************************
 * Get Company Form Details API
 **************************************/
router.get('/getCompanyFormDetails', (req, res) => {
    company_form.find((err, data) => {
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