
//创建http服务
const http = require('http');




//创建服务对象,request是请求报文的封装，response是响应报文的封装
const server = http.createServer((req, res) => {


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
});

//监听端口号，不带端口默认是80端口
server.listen(9000, () => {
    console.log('服务已启动.....');
})

