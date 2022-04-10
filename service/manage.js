const {conn} = require("../db");
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

const deleteApply = async (applyId) => {
    await conn('class_apply').where({
        id: applyId
    }).del()
    return true
}

const rejectApply = async (applyId) => {
    await conn('class_apply').where({
        id: applyId
    }).update({
        result: 2
    })
    return true
}

const agreeApply = async (applyId) => {
    await conn('class_apply').where({
        id: applyId
    }).update({
        result: 1
    })
    return true
}

const ignoreApply = async (applyId) => {
    await conn('class_apply').where({
        id: applyId
    }).update({
        result: 3
    })
    return true
}

module.exports = {
    getApplyList,
    createApply,
    deleteApply,
    rejectApply,
    agreeApply,
    ignoreApply
}