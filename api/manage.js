const ManageService = require('../service/manage');
const rejectApply = async(req,res) => {
    const {id} = req.body
    await ManageService.rejectApply(id)
    R.success().send(res)
}


const listApply = (req,res) => {
    const {class_id} = req.body
    ManageService.getApplyList(class_id).then(data => {
        R.success(data).send(res)
    }).catch(err => {
        R.fail(err).send(res)
    })
}

const agreeApply = async(req,res) => {
    const {id} = req.body
    await ManageService.agreeApply(id)
    R.success().send(res)
}

const ignoreApply = async(req,res) => {
    const {id} = req.body
    await ManageService.ignoreApply(id)
    R.success().send(res)
}

const removeStudent = (req,res) => {

}

const dismissClass = (req,res) => {

}

module.exports = {
    rejectApply,
    listApply,
    agreeApply,
    removeStudent,
    dismissClass
}

