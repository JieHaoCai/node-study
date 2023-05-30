
//需求：针对/admin  /setting的请求，要求url携带code=521参数，如未携带提示【暗号错误】

const express = require('express');
const app = express();


//声明中间件,一般用于验证权限，放在需要验证权限的接口
let checkCodeMiddleware = (req, res, next) => {
    if (req.query.code === '521') {
        next()
    } else {
        res.send('暗号错误')
    }
}

//使用中间件,放到受约束的路由前面
app.get('/admin', checkCodeMiddleware, (req, res, next) => {
    res.send('这是admin页面')
})

app.get('/setting', checkCodeMiddleware, (req, res, next) => {
    res.send('这是setting页面')
})

app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})