//fs流式读取
//导入fs模块
const fs = require('fs');
//创建读取流对象
const rs = fs.createReadStream('./观书有感.txt');
//绑定data事件，读取数据
rs.on('data', chunk => {
    console.log(chunk.toString());
});

//绑定end事件，读取完成,可选事件
rs.on('end', () => {
    console.log('读取完成');
});