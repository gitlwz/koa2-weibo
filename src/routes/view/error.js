/**
 * @description error 404 路由
 * @author 双越老师
 */

const router = require('koa-router')()

// error
router.get('/error', async (ctx, next) => {
    await ctx.render('error')
})

// 404
router.get('*', async (ctx, next) => {
    await ctx.render('404')
})

module.exports = router
