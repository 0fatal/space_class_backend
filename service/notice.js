const {uniqueId} = require("../utils");
const {conn} = require("../db");
const getNoticeList = async (classId) => {
    const res = await conn('class_notice').where({
        'class_id': classId
    }).select(['id','creator_id', 'title'])
    return res
}

const getNoticeDetail = async (noticeId) => {
    const res = await conn('class_notice').where({id: noticeId}).first()
    return res
}

const createNotice = async ({title,content, creatorId,classId}) => {
    await conn('class_notice').insert(
        {
            id: uniqueId(),
            'creator_id': creatorId,
            'content': content,
            'title': title,
            'class_id': classId
        }
    )
    return true
}


const deleteNotice = async(noticeId) => {
    const count = await conn('class_notice').where({id: noticeId}).delete()
    return count > 0
}

module.exports = {
    getNoticeList,
    createNotice,
    deleteNotice,
    getNoticeDetail
}