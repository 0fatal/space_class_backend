const ManageService = require('../service/manage');
const {R} = require('../dto/response');
const {getStaffId} = require("../utils");

const rejectApply = async(req,res) => {
    const {apply_id} = req.body
    const data = await ManageService.rejectApply(apply_id)
    if(data) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }

}

const createJoinApply = async(req,res) => {
    const { class_id,  reason } = req.body
    const staff_id = getStaffId(req)
    const ok = await ManageService.createApply({
        classId: class_id,
        type: 0,
        reason,
        staffId: staff_id
    })
    if(ok) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }
}

const createLeaveApply = async(req,res) => {
    const { class_id,  reason } = req.body
    const staff_id = getStaffId(req)
    const ok = await ManageService.createApply({
        classId: class_id,
        type: 1,
        reason,
        staffId: staff_id
    })
    if(ok) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }
}


const listApply = (req,res) => {
    const {class_id} = req.body
    ManageService.getApplyList(class_id).then(data => {
        if(data) {
            R.success(data).send(res)
        } else {
            R.fail().send(res)
        }
    }).catch(err => {
        R.fail(err).send(res)
    })
}

const agreeApply = async(req,res) => {
    const {apply_id} = req.body
    const ok = await ManageService.agreeApply(apply_id)
    if(ok) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }
}

const ignoreApply = async(req,res) => {
    const {apply_id} = req.body
    const ok = await ManageService.ignoreApply(apply_id)
    if(ok) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }
}

const removeStudent = (req,res) => {
    const {class_id,staff_id} = req.body
    const teacherId = getStaffId(req)
    ManageService.removeStudent(class_id,staff_id,teacherId).then(ok => {
        if(ok) {
            R.success().send(res)
        } else {
            R.fail().send(res)
        }
    }).catch(err => {
        R.fail(err).send(res)
    })
}



module.exports = {
    rejectApply,
    listApply,
    agreeApply,
    ignoreApply,
    removeStudent,
    createJoinApply,
    createLeaveApply
}

