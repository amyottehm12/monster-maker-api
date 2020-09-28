const express = require('express');
const router = express.Router();
const Post = require('../Models/MonsterModel');

router.get('/', (req, res) => {
    res.send('test');
});

router.post('/', (req, res) => {
    
    console.log(res.body);

    const post = new Post ({
        name: req.body.name,
        hp:  req.body.hp,
        ac: req.body.ac,
        desc: req.body.desc
    });

    console.log("model created");

    post.save()
        .then( data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });

    console.log("data saved");

    // model.createMonster(req.body)
    //     .then((result) => {
    //         res.status(201).send({id: result._id});
    //     });
});

module.exports = router;