const express = require('express');
const router = express.Router();
const users = require('../Users');
const uuid = require('uuid');
router.get('/', (req, res) => res.json(users));

router.get('/:id', (req, res) => {

    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found)
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    else
        res.status(400).json({ msg: `no member with id : ${req.params.id}` });
});

router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name
    }
    if (!newUser.name) {
        return res.status(400).json({ msg: "please enter a name to add the users" })
    }

    users.push(newUser);
    res.json(users);
});

module.exports = router;