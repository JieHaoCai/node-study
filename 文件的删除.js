const fs = require('fs');


//他们各自都有同步和异步的方法
//方法一
// fs.unlink('./论语.txt', (err) => {
//     if (err) {
//         console.log('删除失败');
//         return
//     }
//     console.log('删除成功');
// })

//方法二
// fs.unlinkSync('./论语.txt');

//方法三
fs.rm('./论语.txt', (err) => {
    if (err) {
        console.log('删除失败');
        return
    }
    console.log('删除成功');
})