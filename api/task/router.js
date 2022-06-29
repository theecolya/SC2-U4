// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();

const Projects = require('../project/model')
const Tasks = require('./model')
const Wares = require('./tasks-middleware')

router.get('/', (req, res) => {
    Projects.getWithProjects().then((tasks) => {
        tasks.map(task => {
            if(task.task_completed === 0) {
                task.task_completed = false
            } else {
                task.task_completed = true
            }
        })
        return res.status(200).json(tasks)
    })
})

router.post('/', Wares.checkReqs, (req, res) => {
    Tasks.add(req.body).then((task) => {
        if(task.task_completed === 0) {
            task.task_completed = false
            return res.status(201).json(task)
        } else {
            task.task_completed = true
            return res.status(201).json(task)
        }
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router;