//当访问的是get请求，并且路径为login的时候，返回登录页面
//响应一个4行3列的表格，并且要求表格有隔行换色的效果，且点击单元格能高亮显示
//引入http模块
const http = require('http');

const fs = require('fs');
const path = require('path');

//创建服务对象
const server = http.createServer((req, res) => {



    //获取文件的后缀名
    let ext = path.extname(req.url).slice(1);

    let type = mimes[ext]

    //设置响应头
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //当访问的是get请求，并且路径为login的时候，返回登录页面
    if (req.method === 'GET' && req.url === '/login') {

        res.write(fs.readFileSync('./httptest.html'));

        res.end('登录页面');//但是end只能有一个，但是wirite可以有多个
    }
});

//监听端口号
server.listen(9000, () => {
    console.log('服务已启动.....');
})
