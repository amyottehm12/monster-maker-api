const express = require('express');
const router = express.Router();
const Model = require('../Models/MonsterModel');

router.get('/', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    } catch(err) {
        res.json({ message: err})
    }
});

router.post('/', async (req, res) => {

    const model = new Model ({
        name: req.body.name,
        hp:  req.body.hp,
        ac: req.body.ac,
        desc: req.body.desc
    });

    try {
        const savedData = await model.save()
        res.json(savedData);
    } catch(err) {
        res.json({ message: err})
    }

    /// Replace all the above with the below (calling the method on the model itself, handing over the body data and saving there)
    // model.createMonster(req.body)
    //     .then((result) => {
    //         res.status(201).send({id: result._id});
    //     });
});


router.get('/:postId', async (req, res) => {
    try {
        const data = await Model.findById(req.params.postId);
        res.json(data);
    } catch(err) {
        res.json({ message: err})
    }
});


router.delete('/:postId', async (req, res) => {
    try {
        const removedData = await Model.Remove({ _id: req.params.postId });
        res.json(removedData);
    } catch(err) {
        res.json({ message: err})
    }
});


router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Model.updateOne({ _id: req.params.postId}, { $set: { name: req.body.name }});
        res.json(updatedPost);
    } catch(err) {
        res.json({ message: err})
    }
})

module.exports = router;