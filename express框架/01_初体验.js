//1、导入express
const express = require('express');

//2、创建应用对象
const app = express();

//3、创建路由规则,当请求路径为/home时且为get请求，执行回调函数
app.get('/home', (req, res) => {
    res.end('hello express');
})

//4、监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...");
});