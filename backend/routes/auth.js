var express = require('express');
var router = express.Router();
var sha256 = require('sha256')
var nodemailer = require('nodemailer')

// Models
var User = require('../model/User');

router.post('/register', (req, res, next) =>{
    var user = new User({
        name:req.body.name,
        email:req.body.email,
        password:sha256(req.body.password),
        contact: req.body.contact,
        address : req.body.address,
        isTherapist : req.body.isTherapist
    });
    if(!user.name && !user.email && !user.password){
        res.status(401).json({message : "All Fileds are required"})
    }
    User.findOne({email : req.body.email})
        .then(fetchedUser =>{
            if(fetchedUser){
                res.json({message : "User Already Exists"});
            }
                user.save()
                .then(async result =>{
                    
                var html = `
                    <h1>Welcome to the Art Aid project</h1>
                    <br>
                    <h3>Name : ${user.name}</h3>
                    <h3>Email : ${user.email}</h3>
                    <h3>Contact : ${user.contact}</h3>
                    <h3>Address  : ${user.address}</h3>
                `;

                let transporter = nodemailer.createTransport({
                    service: 'gmail', // true for 465, false for other ports
                    auth: {
                        user: 'jayesh203.jp@gmail.com', // generated ethereal user
                        pass: 'bumsnjslqckxkuyc' // generated ethereal password
                    }
                })


                    let info = await transporter.sendMail({
                        from: '"Fred Foo 👻" <test@test.com>', // sender address
                        to: req.body.email, // list of receivers
                        subject: "Hello ✔", // Subject line
                        text: "Hello world?", // plain text body
                        html: html, // html body
                      });
                    res.json({message : "Successfully Registered", emailSending : info})
                })
                .catch(err =>{
                    console.log(err)
                    res.json(err)
                });         
        })
        .catch(err =>{
            console.log(err)
            res.json({message: "Something went wrong"});
        });  

});

router.post('/login', (req, res, next) =>{
    User.findOne({email : req.body.email}).then(result =>{
        console.log(result)
        if(result){
            if(result.password == sha256(req.body.password)){
                res.status(200).json({message : "Login Successs", result})
            }else{
                res.status(402).json({message : "Login Failed, Incorrect Password"});
            }
        }else{
            res.status(401).json({message : "No user found"})
        }
    }).catch(err =>{
        console.log(err)
        res.status(400).json(err)
    });
})

module.exports = router;