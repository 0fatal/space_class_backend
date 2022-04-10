const NoticeService = require('../service/notice');

const createNotice =async (req,res) => {
    const {title,content, creator_id, class_id} = req.body;
    const data = await NoticeService.createNotice({
        title: title,
        content: content,
        creatorId: creator_id,
        classId: class_id
    })
    R.success(data).send(res)
}

const deleteNotice = async (req,res) => {
    const noticeId = req.params.id;
    const data = await NoticeService.deleteNotice(noticeId)
    R.success(data).send(res)
}

const getNoticeList = async(req,res) => {
    const {class_id} = req.body
    const data = await NoticeService.getNoticeList(class_id)
    R.success(data).send(res)
}

module.exports = {
    createNotice,
    deleteNotice,
    getNoticeList
}