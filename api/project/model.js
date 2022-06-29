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
module.exports = {
    get,
    add
}