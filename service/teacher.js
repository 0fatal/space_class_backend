/**
 * registerTeacher 注册导师
 *
 */
const {conn} = require("../db");
const getTeacherInfo = async(staffId) => {
    const teacher =  await conn('teacher').where({
        staff_id: staffId
    }).select()
    console.log('teacher',teacher)
    return teacher
}

/**
 * 是否为导师
 * @param staffId
 * @returns {Promise<boolean>}
 */
const isTeacher = async (staffId) => {
    return !!(await getTeacherInfo())
}

module.exports = {
    getTeacherInfo,
    isTeacher
}