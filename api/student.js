const StudentService = require('../service/student')
const {getStaffId} = require("../utils");
const getStudentList = () => {

}

/**
 *  获取学生信息
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getStudentInfo = async (req,res) => {
    const staffId = req.params['id']
    const data = await StudentService.getStudentInfo(staffId)
    R.success(data).send(res)
}

module.exports = {
    getStudentList,
    getStudentInfo
}