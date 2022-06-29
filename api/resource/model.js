// build your `Resource` model here
const db = require("../../data/dbConfig.js")

function get() {
    return db('resources')
}

function getById(id) {
    return db('resources').where('resource_id', id).first()
}

function add(resource) {
    return db('resources').insert(resource)
        .then(id => {
            return getById(id)
        })
        .catch(err => console.log(err))
}

module.exports = {
    get,
    add
}