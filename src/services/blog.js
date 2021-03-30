const { Blog, User, UserRelation } = require('../db/model/index')
const { formatUser, formatBlog } = require('./_format')

/**
 * 创建微博
 * @param {Object} param0 创建微博的数据 { userId, content, image }
 */
async function createBlog({ userId, content, image }) {
    const result = await Blog.create({
        userId,
        content,
        image
    })
    return result.dataValues
}


module.exports = {
    createBlog
}
