

//获取请求体数据使用body-parser中间件

/**
    GET   /login 显示表单内容
    POST  /login 获取表单中的用户名和密码
 */

const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//解析json格式请求体的中间件
const jsonparser = bodyParser.json()

//解析querystring格式请求体的中间件
const urlencodedparser = bodyParser.urlencoded({ extended: false })




app.get('/login', (req, res) => {
    // res.send('这是登录页面')
    //响应html文件内容
    res.sendFile(__dirname + '/11_form.html')
})

app.post('/login', urlencodedparser, (req, res) => {
    //获取用户名密码
    console.log(req.body)
    res.send('获取数据')
})


app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})