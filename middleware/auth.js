const {getStaffId} = require("../utils");
const {isTeacher} =  require("../service/teacher");
const  {isStudent} = require("../service/student");
const {R} = require('../dto/response');


const NeedAuth = (req,res,next) => {
    const staffId = getStaffId(req)
    if(staffId){
        req.staffId = staffId
        return  next()
    }
    R.fail("unauthorized").send(res)
}

const NeedTeacher = (req, res, next) => {
    const staffId = getStaffId(req)
    if(staffId && isTeacher(staffId)){
        req.staffId = staffId
        return next()
    }
    R.fail("unauthorized").send(res)
}

const NeedStudent = (req,res, next) => {
    const staffId = getStaffId(req)
    if(staffId && isStudent(staffId)){
        req.staffId = staffId
        return  next()
    }
    R.fail("unauthorized").send(res)
}

module.exports = {
    NeedAuth,
    NeedTeacher,
    NeedStudent
}