
const http = require('http');
const fs = require('fs');
const path = require('path');

//引入mimes模块
const mimes = {
    html: 'text/html',
    js: 'text/javascript',
    css: 'text/css',
}

const server = http.createServer((req, res) => {

    // if (req.url === '/index.html') {
    //     let html = fs.readFileSync('./httptest.html');
    //     res.end(html);
    // } else if (req.url === '/index.css') {
    //     let css = fs.readFileSync('./index.css');
    //     res.end(css);
    // } else {
    //     res.statusCode = 404;
    //     res.end('<h1>404 NOT FOUND</h1>')
    // }

    //简洁方法
    fs.readFile(`.${req.url}`, (err, data) => {
        if (err) {
            console.log(err)
            res.statusCode = 404;
            res.end('<h1>404 NOT FOUND</h1>')
            return
        }
        //获取文件的后缀名
        let ext = path.extname(req.url).slice(1);
        //获取对应的类型
        let type = mimes[ext]
        //如果匹配上了
        if (type) {
            if (ext === 'html') {
                //设置响应头
                //解决存在中文乱码问题,并且这种方式优先级最高
                res.setHeader('Content-Type', type + ';charset=utf-8');
            } else {
                res.setHeader('Content-Type', type);
            }

        } else {
            res.setHeader('Content-Type', 'application/octet-stream');
        }
        res.end(data);

    })


});

server.listen(9000, () => {
    console.log('服务已启动.....');
})

