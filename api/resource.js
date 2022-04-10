const ResourceService = require('../service/resource')

/**
 * 获取班级资源列表
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getResourceList = async (req,res) => {
    const data = await ResourceService.getResourceList(req.body.class_id)
    R.success(data).send(res)
}

/**
 * 创建班级资源
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const createResource = async(req,res) => {
    const { name,content,creator_id, class_id} = req.body
    await ResourceService.createResource({
        name:name,
        content: content,
        creatorId: creator_id,
        classId: class_id
    })
    R.success().send(res)
}

/**
 * 删除班级资源
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteResource = async(req,res) => {
    await ResourceService.deleteResource()
    R.success().send(res)
}

module.exports = {
    getResourceList,
    createResource,
    deleteResource
}

