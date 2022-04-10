const { v4: uuidv4 } = require('uuid');

module.exports.uniqueId = () => uuidv4()

module.exports.getStaffId = (req) => {
    return req.headers['staffid']

}

