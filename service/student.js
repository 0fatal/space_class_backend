const {conn} = require("../db");
const isStudent = async(staffId) => {
    return !!(await getStudentInfo(staffId))
}

const getStudentInfo = async(staffId) => {
    const res = await conn('student').where({
        staff_id: staffId
    }).first()
    return res
}

const getStudentList = async(classId) => {
    const ids = await conn('student').where({
        class_id: classId
    }).select(['staff_id'])
    console.log(ids)
    const res = await Promise.all(ids.map(async ({staff_id}) =>{
        return (await conn('user').where({
            staff_id: staff_id
        }).select(['staff_id','username']).first())
    }))
    return res.filter(v => !!v)
}


module.exports = {
    isStudent,
    getStudentInfo,
    getStudentList
}