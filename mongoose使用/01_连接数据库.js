//1、导入mongoose模块
const mongoose = require('mongoose');


//连接mongodb数据库,协议名称://ip地址:端口号/数据库名称
mongoose.connect('mongodb://localhost:27017/cjh')

//用于设置严格模式
mongoose.set('strictQuery', true)

//设置回调
mongoose.connection.once('open', () => {  //连接成功的回调
    console.log('连接成功')
    //创建文档的结构对象
    //设置集合文档中的属性以及属性值的类型
    const BookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true, //设置必填
            unique: true, //设置为独一无二的，必须重建数据库才会生效
        },
        author: {
            type: String,
            default: '佚名', //设置默认值
        },
        style: {
            type: String,
            enum: ['玄幻', '武侠', '言情', '都市'], //设置枚举值
        },
        price: Number,
        is_hot: Boolean,
        date: Date,
    })
    //创建模型对象
    //是对文档操作的封装对象.mongoose创建model会自动将集合名变为复数
    let BookModel = mongoose.model('novel', BookSchema);

    //新增
    BookModel.create({
        name: '水浒传',
        author: '施耐庵',
        price: 1000,
        is_hot: true,
        style: '武侠',
        date: Date.now(),
    }).then((data) => {
        console.log(data)
        //关闭连接（项目运行不会关闭连接）
        mongoose.disconnect()
    }).catch((err) => {
        console.log(err)
    })


})
mongoose.connection.on('error', () => {   //连接失败的回调
    console.log('连接失败')
})

mongoose.connection.on('close', () => {   //连接断开的回调
    console.log('连接断开')
})


//关闭连接
// setTimeout(() => {
//     mongoose.disconnect()
// }, 5000)
