const router = require('koa-router')()
const { loginRedirect } = require('../middlewares/loginChecks')
router.get('/', loginRedirect, async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {

    ctx.body = {
        title: 'koa2 json',
    }
})

module.exports = router
