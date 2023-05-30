
const expredss = require('express');

const app = expredss();
//引入路由文件
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter');
//设置路由文件
app.use(homeRouter)
app.use(adminRouter)




app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})