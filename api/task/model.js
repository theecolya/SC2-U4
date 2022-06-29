// build your `Task` model here
const db = require("../../data/dbConfig.js")

function get() {
    return db('tasks')
}

function getById(id) {
    return db('tasks').where('task_id', id).first()
}

module.exports = {
    get,
}