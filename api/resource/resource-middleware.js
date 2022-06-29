const Resources = require('./model')

const checkName = (req, res, next) => {
    Resources.get().then((resources) => {
        let resArr = resources.map(item => item.resource_name);
        if (resArr.includes(req.body.resource_name)) {
            return res.status(400).json('Ouch: Resouce name must be unique')
        } else { next() }})
    }
    
module.exports = {
    checkName
}