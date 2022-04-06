const {dbQuery} = require("../db");
const getClassList = async(req,res) => {
    const re = await dbQuery('select * from class')
    res.send(re)
}

const getMyClass = async(req,res) => {
    const re = await dbQuery('select * from class')
    res.send(re)
}

const getClassInfo = async(req,res) => {
    const re = await dbQuery('select * from class')
    res.send(re)
}

const createClass = async(req,res) => {
    const re = await  dbQuery('insert into class values (?,?,)')
}

const getTeacherClassList = (req,res) => {

}

const updateClassInfo = (req,res) => {

}



module.exports = {
    getClassList,
    getMyClass,
    getClassInfo
    getTeacherClassList,
    updateClassInfo
}