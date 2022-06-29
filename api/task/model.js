// build your `Task` model here
const db = require("../../data/dbConfig.js")

function get() {
    return db('tasks')
}

function getById(id) {
    return db('tasks').where('task_id', id).first()
}

function add(task) {
    return db('tasks').insert(task)
        .then(id => {
            return getById(id)
        })
        .catch(err => console.log(err))
}

module.exports = {
    get,
    add
}