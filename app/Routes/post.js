const express = require('express');
const router = express.Router();
const model = require('../Models/MonsterModel');

router.get('/', (req, res) => {
    res.send('post');
});

router.post('/', (req, res) => {
    console.log(req.body);
    model.createMonster(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
});

module.exports = router;