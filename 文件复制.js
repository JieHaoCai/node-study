

const fs = require('fs');

//一、readFile() 读取文件
// let data = fs.readFileSync('./观书有感.txt')
// //写入文件
// fs.writeFileSync('./观书有感复制.txt', data)


//二、createReadStream() 读取文件
const rs = fs.createReadStream('./观书有感.txt');
//createWriteStream() 写入文件
const ws = fs.createWriteStream('./观书有感复制-2.txt');

// //绑定data事件，读取数据
// rs.on('data', chunk => {
//     ws.write(chunk);
// });

// //绑定end事件，读取完成,可选事件

// rs.on('end', () => {
//     console.log(process.memoryUsage());//内存使用情况,流式占用内存空间最少
// })

rs.pipe(ws);//管道流，简化代码