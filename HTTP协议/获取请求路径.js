
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    //获取请求方法
    console.log(req.method);
    //解析req.url
    const { pathname, query } = url.parse(req.url, true);
    console.log(pathname, query);  ///login [Object: null prototype] { username: '1111' }, [Object: null prototype]这个是query的原型，null是因为没有设置原型
    //设置响应头
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('你好啊');
})

server.listen(9000, () => {
    console.log('服务已启动.....');
})

