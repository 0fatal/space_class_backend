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
const ExceptionFallbackMiddleware = require('../middleware/exception')

module.exports = {
    initRouter(r) {
        r.use(ExceptionFallbackMiddleware) // 异常处理中间价
        r.use(AuthMiddleware.NeedAuth) // 鉴权中间件
        // r.get('/ping', PingApi.ping)


        r.get('/profile/info', UserApi.getUserInfo) // 获取个人信息
        {
            r.get('/class/list', ClassApi.getClassList) // 获取全部班级列表
            r.get('/class/', ClassApi.getMyClass,AuthMiddleware.NeedStudent) // 获取自己的班级
            r.get('/class/info/:id',ClassApi.getClassInfo) // 获取班级信息
            r.post('/class/info/update',ClassApi.updateClassInfo,AuthMiddleware.NeedTeacher)  // 更新班级信息
            r.post('/class/dismiss',ClassApi.dismissClass,AuthMiddleware.NeedTeacher) // 解散班级
            r.post('/class/create',ClassApi.createClass,AuthMiddleware.NeedTeacher) // 创建班级
        }


        {
            r.get('/teacher/class/list', ClassApi.getTeacherClassList, AuthMiddleware.NeedTeacher) // 获取老师自己的班级列表
            r.get('/teacher/info/:id',TeacherApi.getTeacherInfo) // 获取老师信息
        }

        r.post('/project/list',ProjectApi.getProjectList) // 获取项目列表

        {
            r.post('/resource/list',ResourceApi.getResourceList) // 获取班级资源列表
            r.post('/resource/create',ResourceApi.createResource) // 创建班级资源
            r.post('/resource/delete',ResourceApi.deleteResource) // 删除班级资源
            r.get('/resource/:id',ResourceApi.getResourceDetail) // 班级资源详情
        }

        {
            r.post('/student/list',StudentApi.getStudentList) // 班级学生列表
            r.get('/student/info/:id',StudentApi.getStudentInfo) // 学生信息
        }

        {
            r.post('/notice/create', NoticeApi.createNotice,AuthMiddleware.NeedTeacher) // 发起通知
            r.post('/notice/delete', NoticeApi.deleteNotice,AuthMiddleware.NeedTeacher) // 删除通知
            r.get('/notice/detail/:id', NoticeApi.getNoticeDetail) // 通知详情
            r.post('/notice/list',NoticeApi.getNoticeList) // 获取通知列表
        }

        r.post('/apply/create/join',ManageApi.createJoinApply,AuthMiddleware.NeedStudent) // 创建入班申请
        r.post('/apply/create/leave',ManageApi.createLeaveApply,AuthMiddleware.NeedStudent) // 创建退班申请

        {
            r.post('/manage/apply/reject',ManageApi.rejectApply,AuthMiddleware.NeedTeacher) // 拒绝加入/退出班级申请
            r.post('/manage/apply/list',ManageApi.listApply,AuthMiddleware.NeedTeacher) // 申请列表
            r.post('/manage/apply/ignore',ManageApi.ignoreApply,AuthMiddleware.NeedTeacher) // 忽略申请
            r.post('/manage/apply/agree', ManageApi.agreeApply,AuthMiddleware.NeedTeacher) // 同意加入班级申请
            r.post('/manage/remove',ManageApi.removeStudent,AuthMiddleware.NeedTeacher) // 移出班级
        }
    },
}
