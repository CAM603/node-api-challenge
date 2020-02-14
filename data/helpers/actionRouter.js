const express = require('express');

const Action = require('./actionModel');
const Project = require('./projectModel');

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

router.post('/', (req, res, next) => {

    Project.get(req.body.project_id)
        .then(project => {
            if(project) {
                Action.insert(req.body)
                .then(action => {
                    res.status(200).json(action)
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({ error: 'Error adding action'})
                })
            } else {
                res.status(400).json({ message: "invalid project id" })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error finding project id'})
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

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Action.remove(id)
        .then(removed => {
            res.status(200).json(removed)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error deleting action'})
        })
})
module.exports = router;