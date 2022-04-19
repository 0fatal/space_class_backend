const StudentService = require('../service/student')
const { R } = require('../dto/response')

/**
 * 获取学生列表
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getStudentList = async (req, res) => {
    const { class_id } = req.body
    const data = await StudentService.getStudentList(class_id)
    R.success(data).send(res)
}

/**
 *  获取学生信息
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getStudentInfo = async (req, res) => {
    const staffId = req.body['staff_id']
    const data = await StudentService.getStudentInfo(staffId)
    R.success(data).send(res)
}

module.exports = {
    getStudentList,
    getStudentInfo,
}
