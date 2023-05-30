
const expredss = require('express');

//创建路由对象
const router = expredss.Router();

//创建理由规则
router.get('/home', (req, res) => {
    res.send('前台首页')
})


router.get('/search', (req, res) => {
    res.send('内容搜索')
})

//暴露路由对象
module.exports = router;