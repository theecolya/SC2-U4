// build your `Task` model here
const db = require("../../data/dbConfig.js")

function get(id) {
    if (id) {
        return db('tasks').where({id})}
    else {
        return db('tasks')
    };
}

module.exports = {
    get,
}