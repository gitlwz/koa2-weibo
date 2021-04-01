const server = require('../server')
const { Z_COOKIE, L_COOKIE, L_USER_NAME } = require('../testUserInfo')

let BLOG_ID

test('张三创建一条微博，@李四，应该成功', async () => {
    const content = '单元测试自动创建的微博 @李四 - ' + L_USER_NAME
    const res = await server
        .post('/api/blog/create')
        .send({
            content
        })
        .set('cookie', Z_COOKIE)
    expect(res.body.errno).toBe(0)

    // 记录微博 id
    BLOG_ID = res.body.data.id
})

