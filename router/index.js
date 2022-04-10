const PingApi = require('../api/ping')
const TeacherApi = require('../api/teacher')
const ClassApi = require('../api/class')
const ManageApi = require('../api/manage')
const ProjectApi = require('../api/project')
const ResourceApi = require('../api/resource')
const StudentApi = require('../api/student')
const NoticeApi = require('../api/notice')
const UserApi = require('../api/user')

const AuthMiddleware = require('../middleware/auth')

module.exports = {
    initRouter(r) {
        r.use(AuthMiddleware.NeedAuth)
        r.get('/ping', PingApi.ping)


        r.get('/profile/info', UserApi.getUserInfo)
        {
            r.get('/class/list', ClassApi.getClassList)
            r.get('/class/', ClassApi.getMyClass)
            r.get('/class/info/:id',ClassApi.getClassInfo)
            r.post('/class/info/update',ClassApi.updateClassInfo,AuthMiddleware.NeedTeacher)  // 更新班级信息
        }


        {
            r.get('/teacher/class/list', ClassApi.getTeacherClassList, AuthMiddleware.NeedTeacher)
            r.get('/teacher/info/:id',TeacherApi.getTeacherInfo)
        }

        r.post('/project/list',ProjectApi.getProjectList)

        {
            r.post('/resource/list',ResourceApi.getResourceList)
            r.post('/resource/create',ResourceApi.createResource)
            r.post('/resource/delete',ResourceApi.deleteResource)
            r.get('/resource/:id',ResourceApi.getResourceDetail)
        }

        {
            r.post('/student/list',StudentApi.getStudentList)
            r.get('/student/info/:id',StudentApi.getStudentInfo) // 学生信息
        }

        {
            r.post('/notice/create', NoticeApi.createNotice,AuthMiddleware.NeedTeacher) // 发起通知
            r.post('/notice/delete', NoticeApi.deleteNotice,AuthMiddleware.NeedTeacher) // 删除通知
            r.get('/notice/detail/:id', NoticeApi.getNoticeDetail) // 删除通知详情
            r.post('/notice/list',NoticeApi.getNoticeList) // 获取通知列表
        }


        {
            r.post('/manage/apply/reject',ManageApi.rejectApply,AuthMiddleware.NeedTeacher) // 拒绝加入/退出班级申请
            r.post('/manage/apply/list',ManageApi.listApply,AuthMiddleware.NeedTeacher) // 申请列表
            r.post('/manage/apply/ignore',ManageApi.ignoreApply,AuthMiddleware.NeedTeacher) // 忽略申请
            r.post('/manage/apply/agree', ManageApi.agreeApply,AuthMiddleware.NeedTeacher) // 同意加入班级申请
            r.post('/manage/remove',ManageApi.removeStudent,AuthMiddleware.NeedTeacher) // 移出班级
            r.post('/manage/dismiss',ManageApi.dismissClass,AuthMiddleware.NeedTeacher) // 解散班级
        }
    },
}
