const { v4: uuidv4 } = require('uuid');

module.exports.uniqueId = () => uuidv4()

// 从请求头中获取学工号
module.exports.getStaffId = (req) => {
    return req.headers['staffid']
}

