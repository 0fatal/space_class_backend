const {conn} = require("../db");

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
    await conn('class_apply').insert({
        class_id: classId,
        staff_id: staffId,
        type: type,
        reason: reason
    })
    return true
}

/**
 * 删除申请
 * @param applyId
 * @returns {Promise<boolean>}
 */
const deleteApply = async (applyId) => {
    await conn('class_apply').where({
        id: applyId
    }).del()
    return true
}

/**
 * 拒绝申请
 * @param applyId
 * @returns {Promise<boolean>}
 */
const rejectApply = async (applyId) => {
    const res = await conn('class_apply').where({
        id: applyId
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
        id: applyId
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
        id: applyId
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
const removeStudent = async(classId, staffId) => {
    const res = await conn('student').where({
        class_id: classId,
        staff_id: staffId
    }).update({
        class_id: null
    })
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
    getApplyList,
    createApply,
    deleteApply,
    rejectApply,
    agreeApply,
    ignoreApply,
    removeStudent,
    dismissClass
}