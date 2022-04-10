const UserService = require('../service/user')
const {getStaffId} = require("../utils")
const {R} = require('../dto/response')


const getUserInfo = async (req,res) => {
    const data = await UserService.getUserInfo(getStaffId(req))
    R.success(data).send(res)
}

module.exports = {
    getUserInfo
}