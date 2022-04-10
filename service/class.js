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

function get db() { return conn('class')}

const createClass = async (classInfo) => {
    const res = await db.insert({
        id: uniqueId(),
        name: classInfo.name,
        intro: classInfo.intro,
        teacher_id: classInfo.teacher_id
    })
    return true
}

const getTeacherClassList = async (teacherId) => {
    const res = await db.select().where({
        teacher_id: teacherId
    })
    return res
}

const getMyClass = async (studentId) => {
    const {classId} = await conn('student').select('class_id').where(
        {'staff_id': studentId}
    )

    const res =  await db.select().where({
        'id': classId
    })

    return res
}

const getClassList = async() => {
    const res = await conn('class').select()
    return res
}

const getClassInfo = async(classId) =>  {
    const res = await conn('class').first(classId)
    return res
}

module.exports = {
    findUserByStaffID,
    createClass,
    getMyClass,
    getTeacherClassList,
    getClassList,
    getClassInfo,
    getClassInfo
}
