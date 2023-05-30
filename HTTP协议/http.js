
//客户端发送给服务器的叫请求报文，服务器返回给客户端的叫响应报文，当然这两个报文都是遵循HTTP协议的，并且是多次的

//创建http服务
const http = require('http');

//创建服务对象,request是请求报文的封装，response是响应报文的封装
const server = http.createServer((req, res) => {
    //获取请求方式
    // console.log(req.method);
    // //获取请求报文，只包含路径和查询字符串，不包含协议、主机、端口号
    // console.log(req.url);
    // //协议版本，几乎用不到
    // console.log(req.httpVersion);
    // //获取请求头
    // console.log(req.headers);







    //获取请求体
    //1、声明一个变量
    let str = '';
    //2、监听data事件
    req.on('data', (data) => {
        str += data;
    })
    //3、监听end事件
    req.on('end', () => {
        console.log(str);
        //响应
        res.end('你好啊');//设置响应体
    });


    //设置状态码
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');//设置响应头
});

//监听端口号，不带端口默认是80端口
server.listen(9000, () => {
    console.log('服务已启动.....');
})

