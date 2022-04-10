const {conn} = require("../db");
const isStudent = async(staffId) => {
    return !!(await getStudentInfo(staffId))
}

const getStudentInfo = async(staffId) => {
    const res = await conn('student').where({
        staff_id: staffId
    })
    return res
}


module.exports = {
    isStudent,
    getStudentInfo
}