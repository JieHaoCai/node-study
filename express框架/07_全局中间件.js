
//需求：访问任意一个接口记录url和ip地址

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

//声明中间件函数
function recordMiddleware(req, res, next) {
    //获取url和ip地址
    const { url, ip } = req
    //将信息保存在文件中 access.log
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}----${ip}\n`)

    //调用next方法，将请求传递给下一个中间件或者路由
    next()
}

//使用中间件函数
app.use(recordMiddleware)


app.get('/home', (req, res) => {

    res.send('这是home页面')
})


app.get('/about', (req, res) => {

    res.send('这是about页面')
})

app.all('*', (req, res) => {
    res.send('404页面')
})


app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})