const {conn} = require("../db");
const {uniqueId} = require("../utils");

/**
 * 获取申请列表
 * @param classId
 * @returns {Promise<awaited Knex.QueryBuilder<TRecord, ArrayIfAlready<TResult, DeferredKeySelection.Augment<UnwrapArrayMember<TResult>, Knex.ResolveTableType<TRecord>, IncompatibleToAlt<ArrayMember<[(string)[]]>, string, never>, Knex.IntersectAliases<[(string)[]]>>>>>}
 */
const getApplyList = async (classId) => {
    return (await conn('class_apply').where({
       class_id: classId
    }).select(['id', 'staff_id', 'created_at','type','result']))
}

/**
 * 创建申请
 * @param classId
 * @param staffId
 * @param type 0：加入班级 1：退出班级
 * @param reason
 * @returns {Promise<boolean>}
 */
const createApply = async ({classId, staffId, type,reason}) => {
    const student  = await conn('student').select(['class_id']).where({
        staff_id: staffId
    }).first()
    if(type === 0 && student.class_id){  // 学生已经加入班级，需要退出班级
        return false
    }

    if(type === 1 && student.class_id !== classId){  // 学生暂未加入班级
        return false
    }
    await conn('class_apply').insert({
        class_id: classId,
        staff_id: staffId,
        type: type,
        reason: reason,
        id: uniqueId()
    })
    return true
}

/**
 * 删除申请
 * @param applyId
 * @returns {Promise<boolean>}
 */
const deleteApply = async (applyId) => {

    const count = await conn('class_apply').where({
        id: applyId
    }).del()
    return count > 0
}

/**
 * 拒绝申请
 * @param applyId
 * @returns {Promise<boolean>}
 */
const rejectApply = async (applyId) => {
    const res = await conn('class_apply').where({
        id: applyId,
        result: 0
    }).update({
        result: 2
    })
    return res > 0
}

/**
 * 同意申请
 * @param applyId
 * @returns {Promise<boolean>}
 */
const agreeApply = async (applyId) => {
    const res = await conn('class_apply').where({
        id: applyId,
        result: 0
    }).update({
        result: 1
    })
    return res > 0
}

/**
 * 忽略申请
 * @param applyId
 * @returns {Promise<boolean>}
 */
const ignoreApply = async (applyId) => {
    const res = await conn('class_apply').where({
        id: applyId,
        result: 0
    }).update({
        result: 3
    })
    return res > 0
}

/**
 * 从班级中移除学生
 * @param classId
 * @param staffId
 * @returns {Promise<boolean>}
 */
const removeStudent = async(classId, staffId,teacherId) => {
    const _class = await conn('class').where({
        id: classId,
        teacher_id: teacherId
    }).select(['id']).first()
    if(!_class) return false // 不是该老师的班级

    const res = await conn('student').where({
        class_id: classId,
        staff_id: staffId,
    }).update({
        class_id: null
    })
    return res > 0
}



module.exports = {
    getApplyList,
    createApply,
    deleteApply,
    rejectApply,
    agreeApply,
    ignoreApply,
    removeStudent,
}