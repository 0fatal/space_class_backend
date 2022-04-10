const ClassService = require('../service/class')
const {getStaffId} = require("../utils");

const getClassList = async(req,res) => {
    const data =  await ClassService.getClassList()
    res.success(data).send(res)
}

const getMyClass = async(req,res) => {
    const data = await ClassService.getMyClass(getStaffId(req))
    R.success(data).send(res)
}

const getClassInfo = async(req,res) => {
    const classId = req.params['id']
    const re = await ClassService.getClassInfo(classId)
    res.send(re)
}

const createClass = async(req,res) => {
    const {name, intro} = req.body
    try {
        await ClassService.createClass({
            name: name,
            intro: intro,
            teacher_id: getStaffId(req)

        })
        R.success().send(res)
    }catch(e) {
        R.fail(e).send()
    }
}

const getTeacherClassList = async (req,res) => {
    const data = await ClassService.getTeacherClassList(getStaffId(req))
    R.success(data).send(res)
}

const updateClassInfo = (req,res) => {

}



module.exports = {
    getClassList,
    getMyClass,
    getClassInfo,
    getTeacherClassList,
    updateClassInfo,
    createClass
}