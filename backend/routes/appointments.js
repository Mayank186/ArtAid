var express = require('express');
var router = express.Router();

// Assignment Model
var Assignment = require('../model/Assignment');

router.get('/getAssignments', (req, res, next) =>{
    Assignment.find()
        .then(data =>{
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({message : "No Assignments found"} )
            }
        })
        .catch(err =>{
            res.status(400).json(err)
        });
})

router.post('/addAssignment', (req, res, next) =>{
    var assignment = new Assignment({
        clientName : req.body.name,
        assignment : req.body.assignment,
        date:req.body.date,
        status : req.body.status
    });

    assignment.save()
        .then(data =>{
            if(data){
                res.status(200).json({message : "Saved"});
            }else{
                res.status(401).json({message : "Not Saved. Something went Wrong"});
            }
        })
        .catch(err =>{
            console.log(err)
            res.status(404).json(err);
        });
})

module.exports = router;
