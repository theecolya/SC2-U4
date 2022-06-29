const Projects = require('../project/model')
const db = require("../../data/dbConfig.js")

const checkReqs = (req, res, next) => {
    Projects.getById(req.body.project_id).then(
        project => {
            if(project == undefined) {
                res.status(400).json('Ouch: Project id not found')
            }
        }
    )
    if(!req.body.task_description) {
        res.status(400).json('Ouch: Task description is required')
    } else if(!req.body.project_id) {
        res.status(400).json('Ouch: Project id required')
    } else {
        next()
    }
}

module.exports = {
    checkReqs
}