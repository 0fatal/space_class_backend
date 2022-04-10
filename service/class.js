const {  conn} = require('../db')
const {uniqueId} = require("../utils");



/**
 * createClass 创建班级
 * @param classInfo
 * @returns {Promise<boolean>}
 */
const createClass = async (classInfo) => {
    await conn('class').insert({
        id: uniqueId(),
        name: classInfo.name,
        intro: classInfo.intro,
        teacher_id: classInfo.teacher_id
    })
    return true
}

/**
 * getClassList 获取老师班级列表
 * @param teacher_id
 * @returns {Promise<*>}
 */
const getTeacherClassList = async (teacherId) => {
    const res = await conn('class').select().where({
        teacher_id: teacherId
    })
    return res
}


/**
 * getMyClass 获取我的班级
 * @param studentId
 * @returns {Promise<awaited Knex.QueryBuilder<TRecord, TResult>>}
 */
const getMyClass = async (studentId) => {
    const {class_id} = await conn('student').select('class_id').where(
        {'staff_id': studentId}
    ).first()

    console.log(class_id)
    if(!class_id) return null

    const res =  await conn('class').where({
        'id': class_id
    }).first()

    return res
}


/**
 * 获取班级列表
 * @returns {Promise<awaited Knex.QueryBuilder<TRecord, TResult>>}
 */
const getClassList = async() => {
    const res = await conn('class').select()
    return res
}

/**
 * 获取班级详情
 * @param classId
 * @returns {Promise<awaited Knex.QueryBuilder<TRecord, ArrayIfAlready<DeferredKeySelection.AddUnionMember<UnwrapArrayMember<TResult>, undefined>, DeferredKeySelection<TRecord, string>>>>}
 */
const getClassInfo = async(classId) =>  {
    const res = await conn('class').where({
        id: classId
    }).first()
    return res
}

/**
 * 更新班级信息
 * @param classId
 * @returns {Promise<*>}
 */
const updateClassInfo = async(classId, teacherId, { name, intro}) => {
    const res = await conn('class').where({id: classId, teacher_id: teacherId}).update({
        name: name,
        intro: intro,
    })
    console.log('updateClassInfo', res)
    return res > 0
}

/**
 * 解散班级
 * @param classId
 * @returns {Promise<boolean>}
 */
const dismissClass = async(classId) => {
    const res = await conn('class').where({
        id: classId
    }).del()
    return res > 0
}

module.exports = {
    createClass,
    getMyClass,
    getTeacherClassList,
    getClassList,
    getClassInfo,
    updateClassInfo,
    dismissClass
}
