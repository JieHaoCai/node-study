const express = require('express');
const app = express();

app.get('/response', (req, res) => {


    //原生响应
    res.statusCode = 200
    res.statusMessage = 'ok'
    res.setHeader('Content-Type', 'text/html;charset=utf-8')


    //express响应
    res.status(200).header('Content-Type', 'text/html;charset=utf-8').set('name', 'jack')
    res.send('你好')
})

app.get('/response2', (req, res) => {
    //express的其他响应方法
    //1、重定向
    // res.redirect('http://www.baidu.com')

    //2、下载
    // res.download('./public/1.jpg')

    //3、JSON响应
    // res.json({
    //     name: 'cjh',
    //     age: 18
    // })
    //4、响应文件
    // res.sendFile(__dirname + '/public/1.jpg')

})








app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})