const express = require('express');
const router = express.Router();
const Employee = require('../models/product.model')

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controller/product.controller');

router.post("/addEmployee", (req, res, next) => {

    const user = new Employee({
        name: req.body.name,
        company:req.body.company,
        emp_id: req.body.emp_id
    });

    user.save()
    .then(result => {
        res.status(200).json({
            docs:[user]
        });
    })
    .catch(err => {
        console.log(err);
    });
});
router.get("/listEmployee", (req, res, next) => {
    User.find({})
        .exec()
        .then(docs => {
            res.status(200).json({
                docs
            });
        })
        .catch(err => {
            console.log(err)
        });
});
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
module.exports = router;