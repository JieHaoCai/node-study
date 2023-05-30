//1、创建buffer，创建一个长度为10字节的buffer，alloc是分配的意思,用这种方法创建的buffer每一个二进制位都会归0
let buf = Buffer.alloc(10);

//2、allocUnsafe创建的buffer里面的二进制位是随机的，会包含旧的内存数据，但是这种创建的速度比较快
let buf1 = Buffer.allocUnsafe(10);


//3、from创建buffer,会将字符串转换成Unicode码，转成十六进制
let buf2 = Buffer.from('hello atguigu');


