const express = require('express');

const Project = require('./projectModel');

const router = express.Router();

router.get('/', (req, res) => {

    Project.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error retrieving project'})
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Project.get(id)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error retrieving project'})
        })
})

router.post('/', (req, res) => {

    Project.insert(req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error adding project'})
        })
})

module.exports = router;