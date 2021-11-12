var express = require('express');
const appointment = require('../model/appointment');
const Slot = require('../model/slots');
var router = express.Router();
const User = require('../model/User')

router.post('/bookAppointment', (req, res, next) =>{
  var data = new appointment({
    therapist : 'Mayank',
    patient : 'Jayesh',
    date : "Nothing",
    time : "24Hr"
  });

  data.save()
    .then(result =>{
      res.status(200).json({message : "Booking confirmed"});
      console.log(result)
    })
    .catch(err =>{
      res.status(400).json(err.data)
      console.log(err)
    });

})

//Get User Profile
router.get('/profile', (req, res, next) => {
  User.findOne(req.userData.email)
    .then(user => {
      res.status(200).json(user)
      console.log(user)
    })
    .catch(err => {
      console.log(err)
      res.status(404).json({message : "Something went wrong"})
    })
})

router.post('/addSlots', (req, res, next) => {
  var slots = new Slot({
    date : req.body.date,
    time : req.body.time
  });

  slots.save()
    .then(data =>{
      res.status(200).json({message : "Saved SLots"})
    })
    .catch(err =>{
      res.status(401).json({message : "Something went wrong"});
    });

})

router.get('/viewSlots', (req, res, next) =>{
  Slot.find().then(slots =>{
    res.status(200).json({data : slots.data})
  }).catch(err =>{
    res.status(404).json(err)
  });
})

module.exports = router;
