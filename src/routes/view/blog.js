const router = require('koa-router')()
const { loginRedirect } = require('../../middlewares/loginChecks')


// 首页
router.get('/', loginRedirect, async (ctx, next) => {
    console.log("88888")

    await ctx.render('index', {})
})


module.exports = router
