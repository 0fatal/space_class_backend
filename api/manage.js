const ManageService = require('../service/manage');
const {R} = require('../dto/response');

const rejectApply = async(req,res) => {
    const {id} = req.body
    const data = await ManageService.rejectApply(id)
    if(data) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }

}


const listApply = (req,res) => {
    const {class_id} = req.body
    ManageService.getApplyList(class_id).then(data => {
        if(data) {
            R.success().send(res)
        } else {
            R.fail().send(res)
        }
    }).catch(err => {
        R.fail(err).send(res)
    })
}

const agreeApply = async(req,res) => {
    const {id} = req.body
    const data = await ManageService.agreeApply(id)
    if(data) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }
}

const ignoreApply = async(req,res) => {
    const {id} = req.body
    const data = await ManageService.ignoreApply(id)
    if(data) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }
}

const removeStudent = (req,res) => {
    const {class_id,staff_id} = req.body
    ManageService.removeStudent(class_id,staff_id).then(data => {
        if(data) {
            R.success().send(res)
        } else {
            R.fail().send(res)
        }
    }).catch(err => {
        R.fail(err).send(res)
    })
}

const dismissClass = (req,res) => {
    const {class_id} = req.body
    ManageService.dismissClass(class_id).then(data => {

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
    rejectApply,
    listApply,
    agreeApply,
    ignoreApply,
    removeStudent,
    dismissClass
}

