//刚刚的writeFile方法就是一个异步方法，跟nodejs说要写入文件，nodejs记录之后，将此io操作压入队列中，等待其他任务完成之后再执行该任务，因此他是一个异步方法。异步的效率更高

//下面介绍同步方法
const fs = require('fs');

//这个没有回调函数，因为不是异步的，所以不需要回调函数
fs.writeFileSync('./1.txt', 'hello world');


//追加内容，异步的就是没有sync，有回调函数
fs.appendFileSync('./1.txt', '你好啊');

//当然witeFileSync也可以追加内容，但是会覆盖原来的内容，需要借助flag,需要持续记录日志
fs.writeFile('./1.txt', '你好啊1111', { flag: 'a' }, (err) => {
    if (err) {
        console.log("写入失败")
        return
    }
    console.log("写入成功")
});