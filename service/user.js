const {conn} = require("../db");

const getUserInfo = async (staffId) => {
    const user =  await conn('user').where({
        staff_id: staffId
    }).first()
    return user
}

module.exports = {
    getUserInfo
}