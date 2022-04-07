const {dbQuery} = require("../db");
const getTeacherInfo = async (teacherId) => {
    const res = await dbQuery('select * from teacher where id = ?', teacherId)
    return res
}


module.exports = {
    getTeacherInfo
}

