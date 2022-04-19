const { R } = require('../dto/response')

const ExceptionFallbackMiddleware = (err, req, res, next) => {
    // try {
    //     return next()
    // } catch (e) {
    //     console.log(11111111)
    console.log(err, 11111)
    R.fail(err.message).send(res)
    // }
}

module.exports = ExceptionFallbackMiddleware
