
const express = require('express');

const app = express();


//路由的组成：请求方法+请求路径+回调函数
app.get('/home', (req, res) => {
    res.send('这是home页面')
})

app.get('/', (req, res) => {
    res.send('这是首页')
})

app.post('/login', (req, res) => {
    res.send('登录')
})


app.all('/test', (req, res) => {
    res.send('随意')
})

//404响应
app.all('*', (req, res) => {
    res.send('404')
})



app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})