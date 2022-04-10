const {R} = require('../dto/response');

const ExceptionFallbackMiddleware = (req, res, next) => {
  try {
    next()
  }catch (e){
    console.log(e)
    R.fail().send(res)
  }
};

module.exports = ExceptionFallbackMiddleware;