// build your `Project` model here
const db = require("../../data/dbConfig.js")

function get() {
    return db('projects');
}

function getById(id) {
    return db('projects').where('project_id', id).first()
}
function add(project) {
    return db('projects').insert(project)
        .then(id => {
            return getById(id)
        })
        .catch(err => console.log(err))
}

function getWithProjects() {
    return db('tasks').join(
        'projects',
        'tasks.project_id',
        'projects.project_id'
    ).select(
        'tasks.task_id',
        'tasks.task_description',
        'tasks.task_notes',
        'tasks.task_completed',
        'projects.project_name',
        'projects.project_description'
    )
}

module.exports = {
    get,
    getById,
    add,
    getWithProjects
}