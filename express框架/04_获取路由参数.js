
const express = require('express');
const app = express();


app.get('/singer/:id.html', (req, res) => {
    //获取路由参数
    const id = req.params.id
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(`歌手${id}`)
})
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})