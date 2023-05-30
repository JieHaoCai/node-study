// 需求：新建一个文件，名为1.txt，写入内容为hello world

//1、导入fs模块
const fs = require('fs');

//2、调用writeFile方法，路径、内容、回调函数
fs.writeFile('./1.txt', 'hello world', (err) => {
    //如果写入失败，err就是一个对象，如果写入成功，err就是null
    if (err) {
        console.log('写入失败');
        return
    }
    console.log('写入成功');

});