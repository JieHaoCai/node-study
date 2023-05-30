const fs = require('fs');


//文件的移动就是把第二个参数路径换一下
fs.rename('./观书有感.txt', './论语.txt', (err) => {
    if (err) {
        console.log('重命名失败');
        return
    }
    console.log('重命名成功');
})



