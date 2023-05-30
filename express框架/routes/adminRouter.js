
const expredss = require('express');

//创建路由对象
const router = expredss.Router();

//创建理由规则
router.get('/admin', (req, res) => {
    res.send('管理首页')
})


//暴露路由对象
module.exports = router;