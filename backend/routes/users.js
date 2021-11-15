var express = require('express');
const Slots = require('../model/Slots');
const User = require('../model/User');
var sha256 = require('sha256');
var router = express.Router();

router.get('/profile/:userId', (req, res, next) =>{
  User.findOne({_id : req.params.userId})
    .then(user =>{
      res.status(200).json(user);
    })
    .catch(err =>{
      console.log(err)
      res.status(400).json(err)
    });
});

router.post('/profile/edit/:userId', (req, res, ext) =>{
  var user = new User({
    name : req.body.name, 
    contact:req.body.contact, 
    email:req.body.email, 
    address : req.body.address,
    description : req.body.description,
    imageUrl : req.body.imageUrl
  });

  User.updateOne({email : user.email}, {name : req.body.name, contact:req.body.contact, address : req.body.address, description:req.body.description, password : sha256(req.body.password) })
    .then(result =>{
      res.status(200).json(result)
    })
    .catch(err =>{
      res.status(401).json(err)
    });
})

router.post('/addSlots/:userId', (req, res, next) =>{
  var slot = new Slots({
    date : req.body.date,
    therapist : req.params.userId
  })
  slot.save().then(user =>{
    User.updateOne({_id : req.params.userId}, { $push: { $slots : {date : req.body.date, therapist : req.body.userId} } })
      .then(result =>{
        res.status(200).json(result)
      })
      .catch(err =>{
        res.status(400).json(err)
      })
  }).catch(err =>{
    res.status(402).json(err)
  })
    })

router.post('/bookAppointments/:userId/:appointmentId', (req, res, next) =>{
  var slots = {
    patient : req.params.userId,
    isBooked : true,
  }
  User.updateOne({_id : req.params.userId}, {$push : {slots}})
    .then(user =>{
        res.json({user , message:  "Booked"})
    })
    .catch(err =>{
      res.status(404).json(err)
    })
})


router.get('/allSlots/:userId', (req, res, next) =>{
  User.find({_id : req.params.userId})
    .then(user =>{
      res.json(user)
    })
    .catch(err =>{
      console.log(err)
      res.json(err)
    })
})

module.exports = router;
