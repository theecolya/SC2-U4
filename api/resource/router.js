// build your `/api/resources` router here
const express = require('express');
const router = express.Router();

const Resources = require('./model')
const Wares = require('./resource-middleware')

router.get('/', (req, res) => {
    Resources.get().then((resources) => {
    res.status(200).json(resources)})
    .catch(err => console.log(err))
})

router.post('/', Wares.checkName, (req, res) => {
    Resources.add(req.body).then((resource) => {
        return res.status(201).json(resource)
    })
    .catch(err => console.log(err))
})

module.exports = router;