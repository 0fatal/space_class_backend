const PingApi = require('../api/ping')
const TeacherApi = require('../api/teacher')
const ClassApi = require('../api/class')
const ManageApi = require('../api/manage')
const ProjectApi = require('../api/project')
const ResourceApi = require('../api/resource')
const StudentApi = require('../api/student')
const NoticeApi = require('../api/notice')

module.exports = {
    initRouter(r) {
        r.get('/ping', PingApi.ping)
        r.get('/list', ClassApi.getClassList)
        r.get('/class/', ClassApi.getMyClass)
        r.get('/info/:id',ClassApi.getClassInfo)
        r.get('/teacher/classlist', ClassApi.getTeacherClassList)
        r.post('/info/update',ClassApi.updateClassInfo)  // 更新班级信息


        r.post('/project/list',ProjectApi.getProjectList)

        r.get('/teacher/info/:id',TeacherApi.getTeacherInfo)
        r.get('/resource/list',ResourceApi.getResourceList)

        r.get('/resource/create',ResourceApi.createResource)
        r.get('/resource/delete',ResourceApi.deleteResource)

        r.get('/student/list',StudentApi.getStudentList)
        r.get('/student/info/:id',StudentApi.getStudentInfo) // 学生信息

        r.get('/notice/create', NoticeApi.createNotice) // 发起通知
        r.get('/notice/list',NoticeApi.getNoticeList) // 获取通知列表


        r.post('/manage/apply/reject',ManageApi.rejectApply) // 拒绝加入/退出班级申请
        r.post('/manage/apply/list',ManageApi.listApply) // 申请列表
        r.post('/manage/apply/agree', ManageApi.agreeApply) // 同意加入班级申请
        r.post('/manage/remove',ManageApi.removeStudent) // 移出班级
        r.post('/manage/dismiss',ManageApi.dismissClass) // 解散班级1

    },
}
