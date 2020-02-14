const express = require('express');

const Action = require('./actionModel');

const router = express.Router();

router.get('/', (req, res) => {

    Action.get()
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error getting actions'})
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Action.get(id)
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error getting action'})
        })
})

router.post('/', (req, res) => {

    Action.insert(req.body)
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error adding action'})
        })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;

    Action.update(id, req.body)
        .then(updated => {
            res.status(200).json(updated)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error updating action'})
        })
})
module.exports = router;