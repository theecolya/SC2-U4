// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

const Projects = require('./model')

router.get('/', (req, res) => {
    Projects.get().then((projs) => {
    res.status(200).json(projs)})
    .catch(err => console.log(err))
})

module.exports = router;