

console.log(__dirname + '/test/1.txt');


const path = require('path');


//这种更规范，如果用/test/1.txt，那么就是在当前目录下的test文件夹下的1.txt
console.log(path.resolve(__dirname, 'test/1.txt'))

//获取操作系统的分隔符
console.log(path.sep);

//解析路径，返回一个对象
console.log(path.parse(__dirname + '/test/1.txt'));

