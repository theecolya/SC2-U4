// build your `Resource` model here
const db = require("../../data/dbConfig.js")

function get(id) {
    if (id) {
        return db('resources').where({id})}
    else {
        return db('resources')
    };
}

module.exports = {
    get,
}