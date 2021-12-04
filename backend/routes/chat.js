var express = require('express');
var router = express.Router();

//Models
var Chat = require('../model/Chat');


router.post('/saveChat', (req, res, next) =>{
    var chat = new Chat({
        to :req.body.to,
        from:req.body.from,
        date : req.body.date,
        message : req.body.message,
        seen : 0
    });

    chat.save()
        .then(chat =>{
            console.log("CHat Saves");
            res.status(200).json(chat);
        })
        .catch(err =>{
            console.log(err);
        });
});


router.get('/getChats', (req, res, next) =>{
    var {to, from} = req.body;

    Chat.find({$and : [{$or : [{to : to}, {to:from}]}, {$or : [{from:to}, {from:from}]}]}).sort({date: 'descending'}).exec((err, docs) => {
        res.json(docs)
     });
})

router.get('/getList', async (req, res, next) =>{
    var user = req.body.name;
    var list = [];
    await Chat.distinct('from', {name : user})
        
})

module.exports = router;