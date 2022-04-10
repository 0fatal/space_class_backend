const UserService = require('../service/user')
const {getStaffId} = require("../utils");

const getUserInfo = async (req,res) => {
    const data = await UserService.getUserInfo(getStaffId())
    R.success(data).send(res)
}

module.exports = {
    getUserInfo
}