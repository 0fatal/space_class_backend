const ResourceService = require('../service/resource')
const {R} = require('../dto/response');
const {getStaffId} = require("../utils");


/**
 * 获取班级资源列表
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getResourceList = async (req,res) => {
    const { class_id } = req.body
    const data = await ResourceService.getResourceList(class_id)
    R.success(data).send(res)
}

const getResourceDetail = async (req,res) => {
    const { id: resource_id } = req.params
    const data = await ResourceService.getResourceDetail(resource_id)
    R.success(data).send(res)
}

/**
 * 创建班级资源
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const createResource = async(req,res) => {
    const { name,content, class_id} = req.body
    const creator_id = getStaffId(req)
    const ok = await ResourceService.createResource({
        name:name,
        content: content,
        creatorId: creator_id,
        classId: class_id
    })
    if(ok) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }
}

/**
 * 删除班级资源
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteResource = async(req,res) => {
    const { resource_id: resourceId } = req.body
    const ok = await ResourceService.deleteResource(resourceId)
    if(ok) {
        R.success().send(res)
    } else {
        R.fail().send(res)
    }
}

module.exports = {
    getResourceDetail,
    getResourceList,
    createResource,
    deleteResource
}

