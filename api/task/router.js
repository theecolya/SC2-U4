// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();

const Projects = require('../project/model')

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

module.exports = router;