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
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error retrieving project'})
        })
})

router.get('/:id/actions', (req, res) => {
    const {id} = req.params;

    Project.getProjectActions(id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error getting project actions'})
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

router.put('/:id', (req, res) => {
    const {id} = req.params;

    Project.update(id, req.body)
        .then(updated => {
            res.status(200).json(updated)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error updating project'})
        })

})

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Project.remove(id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error deleting project' })
        })
})

module.exports = router;