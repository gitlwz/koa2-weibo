const { User } = require('../db/model/index')
const { formatUser } = require('./_format')

/**
 * 获取用户信息
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function getUserInfo(userName, password) {
    //查询条件
    const whereOpt = {
        userName
    }

    if (password) {
        Object.assign(whereOpt, { password })
    }

    //查询
    const result = await User.findOne({
        attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
        where: whereOpt
    })

    if (result == null) {
        //没有找到
        return result
    }

    return formatUser(result)
}

module.exports = {
    getUserInfo
}
