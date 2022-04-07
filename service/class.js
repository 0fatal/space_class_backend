const { dbQuery, conn} = require('../db')
const {uniqueId} = require("../utils");

async function findUserByStaffID(staffID) {
    try {
        return await dbQuery('SELECT * FROM user WHERE staffID = ?', staffID)
    } catch (err) {
        console.log(err)
        throw err
    }
}

/**
 * createClass 创建班级
 *
 * @param object classInfo
 * {
 *     name: string,
 *     intro: string,
 *     teacher_id: string
 * }
 */

const createClass = async (classInfo) => {
    console.log(1111)
    const res = await conn('class').insert({
        id: uniqueId(),
        name: classInfo.name,
        intro: classInfo.intro,
        teacher_id: classInfo.teacher_id
    })

    return true
}

module.exports = {
    findUserByStaffID,
    createClass
}
