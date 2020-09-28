const express = require('express');
const router = express.Router();
const Model = require('../Models/MonsterModel');

router.get('/', (req, res) => {
    res.send('test');
});

router.post('/', (req, res) => {

    const model = new Model ({
        name: req.body.name,
        hp:  req.body.hp,
        ac: req.body.ac,
        desc: req.body.desc
    });

    model.save()
        .then( data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });


        /// Replace all the above with the below (calling the method on the model itself, handing over the body data and saving there)
        // model.createMonster(req.body)
        //     .then((result) => {
        //         res.status(201).send({id: result._id});
        //     });
});

module.exports = router;