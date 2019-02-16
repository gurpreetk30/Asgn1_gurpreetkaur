//Contact.js,Gurpreet Kaur, 300989390 , 16/2/19

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the contact model
let contactModel = require ('../models/contact');

/* GET contact list page - READ */
router.get('/contact',(req,res,next) => {
    console.log(contactList);


});

//GET the ADD page for the contact list

router.get('/contact',(req,res,next) => {

    res.render('/contact', {
        title :"Add a new contact"
    });


});

//process add page
router.post('/contact', (req,res,next) =>{

    console.log(req.body);
   

});


module.exports = router;