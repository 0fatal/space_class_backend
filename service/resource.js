const {uniqueId} = require("../utils");
const {conn} = require("../db");

/**
 * 获取班级资源列表
 * @param classId
 * @returns {Promise<awaited Knex.QueryBuilder<TRecord, ArrayIfAlready<TResult, DeferredKeySelection.Augment<UnwrapArrayMember<TResult>, Knex.ResolveTableType<TRecord>, IncompatibleToAlt<ArrayMember<[(string)[]]>, string, never>, Knex.IntersectAliases<[(string)[]]>>>>>}
 */
const getResourceList = async (classId) => {
    const res = await conn('class_resource').where({
        'class_id': classId
    }).select(['id','creator_id', 'name'])
    return res
}


/**
 * 获取班级资源详情
 * @param resourceId
 * @returns {Promise<awaited Knex.QueryBuilder<TRecord, ArrayIfAlready<DeferredKeySelection.AddUnionMember<UnwrapArrayMember<TResult>, undefined>, DeferredKeySelection<TRecord, string>>>>}
 */
const getResourceDetail = async (resourceId) => {
    const res = await conn('class_resource').first(resourceId)
    return res
}

/**
 * 创建班级资源
 * @param name
 * @param content
 * @param creatorId
 * @param classId
 * @returns {Promise<boolean>}
 */
const createResource = async ({name,content, creatorId,classId}) => {
    await conn('class_resource').insert(
        {
            id: uniqueId(),
            'creator_id': creatorId,
            'content': content,
            'name': name,
            'class_id': classId
        }
    )
    return true
}




const deleteResource = async(resourceId) => {
    await conn('class_resource').where({id: resourceId}).delete()
    return true
}

module.exports = {
    getResourceList,
    createResource,
    deleteResource,
    getResourceDetail
}