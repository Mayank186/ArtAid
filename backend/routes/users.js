var express = require('express');
const Slots = require('../model/Slots');
const User = require('../model/User');
var router = express.Router();

router.get('/profile/:userId', (req, res, next) =>{
  User.findOne({_id : req.params.userId})
    .then(user =>{
      res.status(200).json(user);
    })
    .catch(err =>{
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

  User.updateOne({email : user.email}, {name : req.body.name, contact:req.body.contact, address : req.body.address, description:req.body.description })
    .then(result =>{
      res.status(200).json(result.data)
    })
    .catch(err =>{
      res.status(401).json(err)
    });
})

router.post('/addSlots/:userId', (req, res, next) =>{
    User.updateOne({_id : req.params.userId}, { $push: { slots :  {dateTime: req.body.date}} })
      .then(result =>{
        res.status(200).json(result)
      })
      .catch(err =>{
        res.status(400).json(err)
      })
})

module.exports = router;
