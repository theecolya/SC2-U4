// build your `Project` model here
const db = require("../../data/dbConfig.js")

function get(id) {
    if (id) {
        return db('projects').where({id})}
    else {
        return db('projects')
    };
}

module.exports = {
    get,
}