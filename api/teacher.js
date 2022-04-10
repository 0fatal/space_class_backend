const TeacherService = require('../service/teacher')
const {R} = require('../dto/response');


/**
 * 获取老师信息
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getTeacherInfo = async (req,res) => {
    const teacherId = req.params['id']
    const data = await TeacherService.getTeacherInfo(teacherId)
    R.success(data).send(res)
}


module.exports = {
    getTeacherInfo,
}

