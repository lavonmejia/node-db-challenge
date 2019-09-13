const express = require('express');
const mappers = require('../data/mappers');


// database access using knex
const db = require('../data/db-helpers.js');

const router = express.Router();

router.get('/projects', (req, res) => {
    db.findProjects()
    .then((data) => {
        if (data === undefined) { res.status(404).json({ message: "The projects with the specified ID do not exist." }) }
        else {
            res.status(200).json(data)
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "The projects information could not be retrieved." })})
});

router.get('/resources', (req, res) => {
    db.findResources()
    .then((data) => {
        if (data === undefined) { res.status(404).json({ message: "The resource with the specified ID does not exist." }) }
        else {
            res.status(200).json(data)
        }
    })
    .catch((err) => res.status(500).json({ error: "The resource information could not be retrieved." }))
});



router.get('/tasks', (req, res) => {
    db.findTasks()
    .then((data) => {
        if (data === undefined) { res.status(404).json({ message: "The tasks with the specified ID does not exist." }) }
        else {
            res.status(200).json(data)
        }
    })
    .catch((err) => res.status(500).json({ error: "The task information could not be retrieved." }))
});



router.post('/projects', (req, res) => {
    db.findProjects({ProjectName:req.body.ProjectName, ProjectDescription:req.body.ProjectDescription, ProjectCompleted: req.body.ProjectCompleted})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: "The project information could not be retrieved." }))
});

router.post('/resources', (req, res) => {
    db.findResources({ResourceName:req.body.ResourceName})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: "The resource information could not be retrieved." }))
});

router.post('/tasks', (req, res) => {
    db.FindTasks({TaskName:req.body.TaskName, TaskDescription:req.body.TaskDescription})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: "The task information could not be retrieved." }))
});


module.exports = router;