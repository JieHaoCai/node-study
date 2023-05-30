
//流式写入适用场景：写入的数据量比较大，比较耗内存，适用于大文件的写入，跟文件建立连接，边写入边读取，不会占用太多内存

//导入fs模块
const fs = require('fs');

//创建写入流对象
const ws = fs.createWriteStream('./观书有感.txt');

//3、wirite
ws.write('锦瑟 - 李商隐\n');
ws.write('锦瑟无端五十弦，一弦一柱思华年。\n');
ws.write('庄生晓梦迷蝴蝶，望帝春心托杜鹃。\n');
ws.write('沧海月明珠有泪，蓝田日暖玉生烟。\n');
ws.write('此情可待成追忆，只是当时已惘然。\n');

//4、关闭流
ws.end();