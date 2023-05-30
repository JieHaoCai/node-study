
const express = require('express');

const app = express();



//静态资源中间件的设置
app.use(express.static(__dirname + '/pubilc'));


app.get('/home', (req, res) => {
    res.end('这是home页面')
})


app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})


//静态资源中间件注意事项
//1、不添加路径默认访问public下的index.html文件，也就是说其他是网站首页
//2、如果静态规则和路由规则冲突，谁先请求到谁就响应，自上而下
//3、路由一般响应动态资源，静态资源由静态资源中间件响应
