
const express = require('express');

const app = express();


//路由的组成：请求方法+请求路径+回调函数
app.get('/request', (req, res) => {

    //原生操作
    console.log(req.method)
    console.log(req.url)
    console.log(req.headers)
    console.log(req.httpVersion)

    //express操作
    console.log(req.path)
    console.log(req.query)

    //获取ip
    console.log(req.ip)
    //获取请求头
    console.log(req.get('host'))


    res.end('这是home页面')
})



app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})