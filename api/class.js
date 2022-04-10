const ClassService = require('../service/class')
const {getStaffId} = require("../utils");
const {R} = require('../dto/response');

const getClassList = async(req,res) => {
    const data =  await ClassService.getClassList()
    R.success(data).send(res)
}

const getMyClass = async(req,res) => {
    const data = await ClassService.getMyClass(getStaffId(req))
    R.success(data).send(res)
}

const getClassInfo = async(req,res) => {
    const classId = req.params['id']
    const data = await ClassService.getClassInfo(classId)
    R.success(data).send(res)
}

const createClass = async(req,res) => {
    const {name, intro} = req.body
    const ok = await ClassService.createClass({
            name: name,
            intro: intro,
            teacher_id: getStaffId(req)
        })

    if(ok){
        R.success().send(res)
    }else{
        R.fail().send(res)
    }

}

const getTeacherClassList = async (req,res) => {
    const data = await ClassService.getTeacherClassList(getStaffId(req))
    R.success(data).send(res)
}

const updateClassInfo = async (req,res) => {
    const { class_id, name, intro } = req.body
    const teacher_id = getStaffId(req)
    const data = await ClassService.updateClassInfo(class_id, teacher_id,{
        name: name,
        intro: intro
    })
    if(data) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }
}

const dismissClass = (req,res) => {
    const {class_id} = req.body
    ClassService.dismissClass(class_id).then(data => {
        if(data) {
            R.success().send(res)
        } else {
            R.fail().send(res)
        }
    }).catch(err => {
        R.fail(err).send(res)
    })
}



module.exports = {
    dismissClass,
    getClassList,
    getMyClass,
    getClassInfo,
    getTeacherClassList,
    updateClassInfo,
    createClass
}