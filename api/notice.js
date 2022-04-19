const NoticeService = require('../service/notice')
const { R } = require('../dto/response')
const { getStaffId } = require('../utils')

const createNotice = async (req, res) => {
    const creator_id = getStaffId(req)
    const { title, content, class_id } = req.body
    const ok = await NoticeService.createNotice({
        title: title,
        content: content,
        creatorId: creator_id,
        classId: class_id,
    })
    if (ok) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }
}

const getNoticeDetail = async (req, res) => {
    const { notice_id } = req.body
    const data = await NoticeService.getNoticeDetail(id)
    R.success(data).send(res)
}

const deleteNotice = async (req, res) => {
    const { notice_id } = req.body
    const ok = await NoticeService.deleteNotice(notice_id)
    if (ok) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }
}

const getNoticeList = async (req, res) => {
    const { class_id } = req.body
    const data = await NoticeService.getNoticeList(class_id)
    R.success(data).send(res)
}

module.exports = {
    createNotice,
    deleteNotice,
    getNoticeList,
    getNoticeDetail,
}
