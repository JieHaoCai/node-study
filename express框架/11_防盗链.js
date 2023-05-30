//防盗链的原理：请求头的来源
const express = require('express');

const app = express();


//声明中间件函数
app.use((req, res, next) => {
    //检测请求头中的referer是否为127.0.0.1
    let referer = req.get('referer')
    if (referer) {
        //实例化
        let url = new URL(referer)
        //获取hostname
        let hostname = url.hostname
        //判断
        if (hostname !== '127.0.0.1') {
            //响应404
            res.send('<h1>404</h1>').status(404)
            return;
        }
    }
    next()
})


//静态资源中间件的设置
app.use(express.static(__dirname + '/pubilc'));



app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})
