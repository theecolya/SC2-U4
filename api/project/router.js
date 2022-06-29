// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

const Projects = require('./model')

router.get('/', (req, res) => {
    Projects.get().then((projs) => {
        projs.map(project => {
        if(project.project_completed === 0) {
            project.project_completed = false
        } else {
            project.project_completed = true
        }})
        return res.status(200).json(projs)
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    Projects.add(req.body).then((project) => {
        if(!req.body.project_name) {
            return res.status(400).json('Ouch: Project name required')
        };
        if(project.project_completed === 0 &&
            req.body.project_name) {
            project.project_completed = false
            return res.status(201).json(project)
        } else if (project.project_completed === 1 &&
            req.body.project_name) {
            project.project_completed = true
            return res.status(201).json(project)
        }
    })
    .catch(err => console.log(err))
})

module.exports = router;