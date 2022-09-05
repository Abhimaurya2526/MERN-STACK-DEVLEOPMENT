// to process user requests only
const express = require('express');
const router = express.Router();
const Model = require('../models/userModel')

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.json(result);

    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/getall',(req,res) =>{
    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(result);
    });
    
})

router.get ('/getbyemail/:email',(req,res) =>{
       console.log(req.params.email);
       

       Model.findOne({eamil : req.params.email})
       .then((result) => {
              res.json(result);
       }).catch((err) => {
              res.status(500).json(err);
       });
})

router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})

module.exports = router;